import { useParams, Link } from 'react-router-dom';
import { Clock, ChefHat, ArrowLeft, Users } from 'lucide-react';
import localRecipes from '../localRecipes.json';

export default function RecipeDetail() {
  const { id } = useParams();

  // Find from local recipes first, fallback message if not found
  const recipe = localRecipes.find(r => String(r.idMeal) === String(id));

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4 px-4">
        <h2 className="text-2xl font-bold text-gray-800">Recipe not found</h2>
        <p className="text-gray-500 text-sm text-center">
          This recipe may only be available from the MealDB API and doesn't have a detail page yet.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">

      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Back button overlaid on image */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        {/* Title overlaid on image */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
          <span className="inline-block px-3 py-1 bg-brand-orange text-white text-xs font-semibold rounded-full mb-2">
            {recipe.strCategory}
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-white">
            {recipe.strMeal}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Meta strip */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm mb-8">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5 text-brand-orange" />
            <div>
              <p className="text-xs text-gray-400">Cook Time</p>
              <p className="text-sm font-semibold">{recipe.cookTime || '45 mins'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-5 h-5 text-brand-orange" />
            <div>
              <p className="text-xs text-gray-400">Servings</p>
              <p className="text-sm font-semibold">4 people</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <ChefHat className="w-5 h-5 text-brand-orange" />
            <div>
              <p className="text-xs text-gray-400">Cuisine</p>
              <p className="text-sm font-semibold">{recipe.strArea || 'Nigerian'}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Ingredients */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Ingredients</h2>
              {recipe.ingredients && recipe.ingredients.length > 0 ? (
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400">No ingredients listed.</p>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Instructions</h2>
              {recipe.instructions ? (
                <div className="space-y-3">
                  {recipe.instructions.split('.').filter(s => s.trim()).map((step, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand-green text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed">{step.trim()}.</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400">No instructions listed.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}