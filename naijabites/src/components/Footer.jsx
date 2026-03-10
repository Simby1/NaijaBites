import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* Main Row */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">

          {/* Logo & Tagline */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-brand-orange flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Naija<span className="text-brand-orange">Bites</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm text-center lg:text-left max-w-xs">
              Your gateway to authentic Nigerian cuisine. Discover, cook, and share.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:items-center sm:gap-8 text-center">
            <Link to="/" className="text-sm text-white/80 hover:text-brand-orange transition-colors py-1">
              Home
            </Link>
            <Link to="/recipes" className="text-sm text-white/80 hover:text-brand-orange transition-colors py-1">
              Recipes
            </Link>
            <Link to="/pantry" className="text-sm text-white/80 hover:text-brand-orange transition-colors py-1">
              My Pantry
            </Link>
            <Link to="/about" className="text-sm text-white/80 hover:text-brand-orange transition-colors py-1">
              About
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram"
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter"
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube"
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col items-center gap-3 md:flex-row md:justify-between text-xs sm:text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} NaijaBites. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-brand-orange transition-colors py-1">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-brand-orange transition-colors py-1">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}