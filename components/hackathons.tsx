'use client';

import React from 'react';
import { hackathons } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

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
        <p className="font-semibold">
          {hackathon.github && (
            <>
              <a href={hackathon.github} target="_">
                GitHub
              </a>
            </>
          )}
          {hackathon.showcase && (
            <>
              {hackathon.github && <> | </>}
              <a href={hackathon.showcase} target="_">
                Showcase
              </a>
            </>
          )}
          {hackathon.app && (
            <a href={hackathon.app} target="_">
              {' '}
              | App
            </a>
          )}
        </p>
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
      <p>
        Hackathons have been pivotal for growth as a software developer. These
        events provide opportunities to learn new tech, grow your skills, and
        network, all while competing for exciting prizes. Here is a list of
        hackathons where my team and I won awards:
      </p>
      <br />
      <div>{hackathonDisplay}</div>
    </section>
  );
};
