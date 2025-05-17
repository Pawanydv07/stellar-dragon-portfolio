'use client';

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 text-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Centered Heading */}
        <h2 className="text-4xl font-bold mb-10 text-cosmic-accent1 text-center">About Me</h2>

        {/* Left-aligned Paragraphs */}
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I'm <span className="text-white font-semibold">Pawan Yadav</span>, a passionate and results-driven <span className="text-white font-semibold">MERN Stack Developer</span> with over <span className="text-white font-semibold">1 year and 2 months of hands-on experience</span> in building scalable, high-performance web applications.  
          I specialize in modern frontend technologies like <span className="text-white">HTML-5</span>, <span className="text-white">JavaScript</span>, <span className="text-white">React.js</span>, <span className="text-white">Next.js</span>, and <span className="text-white">Redux</span>, alongside powerful backend tools like <span className="text-white">Node.js</span>, <span className="text-white">Express.js</span>, <span className="text-white">MongoDB</span>, and <span className="text-white">PostgreSQL</span>.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          With a strong focus on frontend performance optimization, robust backend architecture, and seamless full-stack integrations, I've contributed to several dynamic startups and product-based companies — delivering clean, maintainable, and efficient code. I have also honed my problem-solving skills through <span className="text-white font-semibold">500+ DSA problems</span> solved on LeetCode.
        </p>

        {/* Skills & Availability */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Key Skills</h3>
            <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
              <li>Frontend: HTML-5, JavaScript, React.js, Next.js, Redux, Tailwind CSS, MUI, Shadcn, Bootstrap</li>
              <li>Backend: Node.js, Express.js, MongoDB, PostgreSQL, REST APIs</li>
              <li>Tools: Git, GitHub, Firebase, Vercel, Postman, Azure (Basics)</li>
              <li>Problem Solving, Data Structures & Algorithms</li>
              <li>TypeScript, WordPress, Responsive Web Design</li>
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Open to Opportunities</h3>
            <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
              <li>Actively looking for Full-Time roles as a MERN Stack or Frontend Developer.</li>
              <li>Open to remote positions and global collaboration opportunities.</li>
              <li>Available for freelance and contract-based web development projects.</li>
            </ul>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-3 text-white">Quick Highlights</h3>
          <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
            <li>Reduced API latency by 30% and improved frontend load speed by 40% on recent Next.js projects.</li>
            <li>Built fully functional dashboards and admin panels with React and Next.js.</li>
            <li>Achieved 10× analytics performance optimization with Power BI integrations and data pipeline enhancements.</li>
            <li>Solved 500+ DSA problems on LeetCode.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
