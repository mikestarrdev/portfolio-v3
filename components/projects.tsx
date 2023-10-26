'use client';

import React from 'react';
import { SectionHeading } from './section-heading';
import { projectsData } from '@/lib/data';
import { Project } from './project';
import { useSectionInView } from '@/lib/hooks';

export const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>projects and open-source work</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
