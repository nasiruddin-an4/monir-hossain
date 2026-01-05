'use client';

export default function PageShell({ title, subtitle, children }) {
  // Format title from slug if not provided explicitly
  const displayTitle = title 
    ? title.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    : 'Page Title';

  const displaySubtitle = subtitle || `Discover insights and information about ${displayTitle.toLowerCase()}`;

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-black dark:via-zinc-950 dark:to-slate-950 min-h-screen py-32 lg:py-40 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-semibold tracking-wider uppercase">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="gradient-text font-bold">Explore</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6
">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400" style={{fontFamily: 'var(--font-display)'}}>
              {displayTitle}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {displaySubtitle}
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="animate-scale-in">
          {children ? (
            <div className="glass-card rounded-3xl p-8 lg:p-12 shadow-premium-lg">
              {children}
            </div>
          ) : (
            <div className="glass-card rounded-3xl p-12 lg:p-16 shadow-premium-lg">
              <div className="flex flex-col items-center justify-center text-center space-y-8 py-12">
                {/* Icon with gradient background */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-50 animate-pulse-slow"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>

                {/* Text content */}
                <div className="space-y-4 max-w-md">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white" style={{fontFamily: 'var(--font-display)'}}>
                    Content Coming Soon
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We're crafting exceptional content for <strong className="text-gray-900 dark:text-white">{displayTitle}</strong>. 
                    This section will be filled with valuable insights and information.
                  </p>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl pt-8">
                  {[
                    { icon: "✍️", label: "In Development", desc: "Content being crafted" },
                    { icon: "🎨", label: "Premium Design", desc: "Modern aesthetics" },
                    { icon: "🚀", label: "Coming Soon", desc: "Stay tuned for updates" }
                  ].map((item, index) => (
                    <div 
                      key={item.label}
                      className="glass-card p-6 rounded-2xl hover-lift group cursor-pointer"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.label}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Return Home</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
