import { useEffect, useState } from 'react';

export default function WaitingPage() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
      size: 4 + Math.random() * 8,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-xy"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/30 backdrop-blur-sm animate-float"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.animationDuration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Logo/Icon */}
        <div className="mb-8 animate-pulse-slow">
          <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-purple-500/50">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CE
              </span>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="mb-4 text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
          Coming Soon
        </h1>
        
        {/* Subheading */}
        <p className="mb-8 max-w-2xl text-xl md:text-2xl text-gray-300 animate-fade-in-up animation-delay-200">
          Something amazing is in the works
        </p>

        {/* Description */}
        <p className="mb-12 max-w-xl text-base md:text-lg text-gray-400 animate-fade-in-up animation-delay-400">
          I'm currently crafting a new portfolio experience. Stay tuned for an immersive journey through my projects and skills.
        </p>

        {/* Loading bar */}
        <div className="mb-12 w-full max-w-md animate-fade-in-up animation-delay-600">
          <div className="h-2 rounded-full bg-slate-800/50 backdrop-blur-sm overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-loading-bar rounded-full"></div>
          </div>
        </div>

        {/* Social links or contact info */}
        <div className="flex gap-6 animate-fade-in-up animation-delay-800">
          <a
            href="https://github.com/CEnjolras"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <svg
              className="h-6 w-6 text-white transition-transform group-hover:rotate-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          
          <a
            href="mailto:contact@yourmail.com"
            className="group rounded-full bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <svg
              className="h-6 w-6 text-white transition-transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <svg
              className="h-6 w-6 text-white transition-transform group-hover:rotate-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Footer text */}
        <div className="mt-16 text-sm text-gray-500 animate-fade-in-up animation-delay-1000">
          <p>Expected launch: Soon™</p>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}
