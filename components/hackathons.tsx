'use client';

import React from 'react';
import { hackathons } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';
import { ProjectBtn } from './project-btn';

export const Hackathons = () => {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  const hackathonDisplay = hackathons.map((hackathon, index) => {
    return (
      <div
        key={index}
        style={{
          background:
            theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
        }}
        className={`m-auto ${
          index === 1 && 'my-8'
        } py-[1.3rem] px-[2rem] rounded-lg text-center`}
      >
        <h3 className="font-semibold text-xl">{hackathon.title}</h3>
        <p className="">
          <span className="font-semibold">Dates:</span> {hackathon.dates}
        </p>
        <p>
          <span className="font-semibold">Project title:</span>{' '}
          {hackathon.title}
        </p>
        <p>
          <span className="font-semibold">Problem:</span> {hackathon.problem}
        </p>
        <p>
          <span className="font-semibold">Solution:</span> {hackathon.solution}
        </p>
        <p>
          <span className="font-semibold">Awards received:</span>{' '}
          {hackathon.awards}
        </p>
        <div className="flex justify-center w-full mt-4 mb-2 leading-relaxed">
          {hackathon.github && (
            <div>
              <a href={hackathon.github} target="_">
                <ProjectBtn type="github" />
              </a>
            </div>
          )}
          {hackathon.showcase && (
            <div className="mx-2">
              <a href={hackathon.showcase} target="_">
                <ProjectBtn type="demo" />
              </a>
            </div>
          )}
          {hackathon.app && (
            <div className="mx-2">
              <a href={hackathon.app} target="_">
                <ProjectBtn type="project" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <section
      id="hackathons"
      ref={ref}
      className="flex flex-col mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>Hackathons and Awards</SectionHeading>
      <br />
      <div>{hackathonDisplay}</div>
    </section>
  );
};
