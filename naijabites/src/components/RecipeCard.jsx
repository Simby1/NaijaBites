import { Clock, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function RecipeCard({ recipe }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400';
          }}
        />
        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-brand-orange/90 text-white">
            {recipe.strCategory}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 line-clamp-1">
          {recipe.strMeal}
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 mb-3">
          {recipe.strArea || 'Nigerian'}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange" />
            <span>{recipe.cookTime || '45 mins'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ChefHat className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange" />
            <span>4 servings</span>
          </div>
        </div>

        {/* CTA - pushed to bottom */}
        <div className="mt-auto">
          <Link
            to={`/recipe/${recipe.idMeal}`}
            className="block w-full h-10 sm:h-11 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green/90 active:scale-95 transition-all text-sm text-center leading-10 sm:leading-11"
          >
            View Recipe
          </Link>
        </div>
      </div>

    </article>
  );
}