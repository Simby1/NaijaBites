import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-brand-green flex items-center justify-center">
              <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              Naija<span className="text-brand-orange">Bites</span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-4 sm:gap-8">
            <Link to="/" className="text-sm font-medium text-gray-800 hover:text-brand-green transition-colors py-2">
              Home
            </Link>
            <Link to="/pantry" className="text-sm font-medium text-gray-500 hover:text-brand-green transition-colors py-2">
              My Pantry
            </Link>
          </div>

        </nav>
      </div>
    </header>
  );
}