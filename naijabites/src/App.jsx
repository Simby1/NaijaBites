import React, { useState, useEffect } from 'react';
import localRecipes from './localRecipes.json';
import Navbar from './components/Navbar';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const fetchRecipes = async (query = '') => {
    try {
      // fetch from TheMealDB
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      
      //filter local recipes based on search
      const filteredLocal = localRecipes.filter(r => 
        r.strMeal.toLowerCase().includes(query.toLowerCase())
      );

      //merge them Local DB then AP)
      const combined = [...filteredLocal, ...(data.meals || [])];
      setRecipes(combined);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes('');
  }, []);

  return (
    <>  
    <Navbar />
    <div className="min-h-screen bg-gray-50 pt-16 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-brand-green mb-4">NaijaBites 🥘</h1>
          <div className="flex gap-2">
            <input 
              type="text" 
              className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green outline-none"
              placeholder="Search Jollof, Chicken, etc..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button 
              onClick={() => fetchRecipes(search)}
              className="bg-brand-green text-white px-6 py-2 rounded-lg font-bold hover:bg-opacity-90"
            >
              Search
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{recipe.strMeal}</h3>
                <p className="text-sm text-brand-orange font-medium">{recipe.strArea} • {recipe.strCategory}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;