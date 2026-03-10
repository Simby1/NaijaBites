import { Search } from 'lucide-react';

export default function Hero({ search, setSearch, onSearch }) {
  const popularSearches = ['Plantain', 'Rice', 'Pepper', 'Palm Oil', 'Beans'];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-green pt-16">

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Tagline pill */}
        <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          Discover Authentic Nigerian Flavors
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Cook Like a True
          <span className="block text-brand-orange">Nigerian</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Explore hundreds of traditional recipes from across Nigeria.
          Search by ingredient and bring authentic flavors to your kitchen.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-xl mx-auto">
          <div className="flex items-center bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="pl-4 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSearch(search)}
              placeholder="Search by ingredient (e.g., Yam)"
              className="flex-1 h-14 px-4 text-gray-800 placeholder-gray-400 focus:outline-none text-base"
            />
            <div className="pr-2">
              <button
                onClick={() => onSearch(search)}
                className="h-10 px-6 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Search
              </button>
            </div>
          </div>

          {/* Popular searches */}
          <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
            <span className="text-sm text-white/60">Popular:</span>
            {popularSearches.map((item) => (
              <button
                key={item}
                onClick={() => { setSearch(item); onSearch(item); }}
                className="px-3 py-1.5 text-sm text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}