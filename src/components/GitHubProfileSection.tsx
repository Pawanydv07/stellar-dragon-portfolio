'use client';

import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubProfileSection: React.FC = () => {
  return (
    <section className="py-16 px-4  text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">GitHub Activity</h2>
      <p className="mb-4 text-gray-400">
        Here's a glimpse of my recent GitHub contributions.
      </p>
      <div className="flex justify-center overflow-x-auto">
        <GitHubCalendar
          username="starydv7" // Replace with your GitHub username
          blockSize={15}
          blockMargin={5}
          color="#00bcd4"
          fontSize={14}
        />
      </div>
    </section>
  );
};

export default GitHubProfileSection;
