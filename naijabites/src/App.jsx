import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import localRecipes from './localRecipes.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeCard from './components/RecipeCard';
import Footer from './components/Footer';

function Home({ recipes, search, setSearch, fetchRecipes }) {
  return (
    <>
      <Hero search={search} setSearch={setSearch} onSearch={fetchRecipes} />
      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {search ? `Results for "${search}"` : 'All Recipes'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const fetchRecipes = async (query = '') => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();

      const filteredLocal = localRecipes.filter(r =>
        r.strMeal?.toLowerCase().includes(query.toLowerCase())
      );

      const nigerianMeals = (data.meals || []).filter(r =>
        r.strArea === 'Nigerian' || r.strArea === 'Ghanaian' || r.strArea === 'Kenyan'
      );

      const combined = [...filteredLocal, ...nigerianMeals];
      setRecipes(combined.length > 0 ? combined : localRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes(localRecipes);
    }
  };

  useEffect(() => {
    fetchRecipes('');
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home
            recipes={recipes}
            search={search}
            setSearch={setSearch}
            fetchRecipes={fetchRecipes}
          />
        } />
        <Route path="/recipe/:id" element={<RecipeDetailPage allRecipes={recipes} />} />
      </Routes>
      <Footer />
    </>
  );
}

//placeholder to be replaced
function RecipeDetailPage({ allRecipes }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500 text-lg">Loading recipe...</p>
    </div>
  );
}

export default App;