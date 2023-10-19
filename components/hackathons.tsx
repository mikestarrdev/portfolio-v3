'use client';

import React from 'react';
import { hackathons } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';
import { AiOutlineGithub } from 'react-icons/ai';
import { TbClick } from 'react-icons/tb';
import { LiaRocketSolid } from 'react-icons/lia';

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
        <h3 className="my-2 font-bold text-xl">{hackathon.awards}</h3>
        <div>
          <ul>
            <li>
              <span className="font-semibold underline">Event:</span>{' '}
              <span className="font-medium italic">{hackathon.event}</span>. (
              {hackathon.dates}).
            </li>
            <li>
              <span className="font-semibold underline">Problem:</span>{' '}
              {hackathon.problem}
            </li>
            <li>
              <span className="font-semibold underline">Solution:</span>{' '}
              {hackathon.solution}
            </li>
          </ul>
          {/* <span className="font-semibold underline">Event:</span>{' '}
          <span className="font-medium italic">{hackathon.event}</span>. (
          {hackathon.dates}). */}
        </div>

        {/* <div>
          <span className="font-semibold underline">Problem:</span>{' '}
          {hackathon.problem}
        </div> */}
        {/* <div>
          <span className="font-semibold underline">Solution:</span>{' '}
          {hackathon.solution}
        </div> */}
        <div className="flex flex-row justify-center items-center mt-2 font-semibold">
          {/* <span className="font-semibold underline mr-1">Links:</span>{' '} */}
          {hackathon.github && (
            <div className="flex items-center">
              <AiOutlineGithub style={{ marginRight: '0.25rem' }} />
              <a href={hackathon.github} target="_">
                <span className="mr-1">GitHub</span>
              </a>
            </div>
          )}
          {hackathon.showcase && (
            <>
              {hackathon.github && <div className="ml-1">|</div>}
              <div className="flex items-center">
                <TbClick
                  style={{ marginLeft: '0.5rem', transform: 'scaleX(-1)' }}
                />
                <a href={hackathon.showcase} target="_">
                  <span className="ml-1">Showcase</span>
                </a>
              </div>
            </>
          )}
          {hackathon.app && (
            <>
              <div className="ml-1">|</div>
              <div className="flex items-center">
                <LiaRocketSolid style={{ marginLeft: '0.25rem' }} />
                <a href={hackathon.app} target="_">
                  <span className="ml-1">App</span>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    );
  });

  return (
    <section
      id="hackathons"
      ref={ref}
      className="flex flex-col mb-28 max-w-[38rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>Hackathons and Awards</SectionHeading>

      <div>{hackathonDisplay}</div>
    </section>
  );
};
