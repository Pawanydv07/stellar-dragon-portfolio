'use client';

import { ArrowRight } from 'lucide-react';

const ExtraSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/ExtraSection-bg.png')" }}
    >
      {/* Logo */}
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cosmic-accent1 shadow-lg mb-8">
  <img src="/P.svg" alt="Hero Graphic" className="w-full h-full object-cover" />
</div>

      {/* Heading */}
      <h1 className="text-center text-4xl md:text-6xl font-light leading-tight playwrite-us-modern">
        FROM CONCEPT TO{' '}
        <span className="font-bold">CREATION</span><br />
        LET&apos;s MAKE IT <span className="font-bold">HAPPEN!</span>
      </h1>

    

      {/* Call to Action */}
      <div className="mt-8">
        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
          Get In Touch
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Availability Text */}
      <p className="mt-10 text-lg font-semibold text-center">
        I&apos;m available for full-time roles & freelance projects.
      </p>

      {/* Sub Text */}
      <p className="mt-2 text-gray-300 text-center max-w-xl">
        I thrive on crafting dynamic web applications, and delivering seamless user experiences.
      </p>
    </section>
  );
};

export default ExtraSection;
