'use client';

import React from 'react';
import { SectionHeading } from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p>
        I'm a software engineer 💻 and web developer at AirSwap, specializing in
        building front-end applications and designing user interfaces for a
        decentralized trading platform that boasts a swap volume exceeding $3.89
        billion in value 💸.
      </p>
      <br />

      <p>
        A pivotal moment in my software development journey was when I enrolled
        in a software engineering program at Flatiron School. This program,
        focusing on JavaScript, React, Ruby, Ruby on Rails, Sinatra, and Active
        Record, played a crucial role in connecting the dots between front-ends,
        back-ends, and databases.
      </p>
      <br />
      <p>
        Before venturing into software development, I owned a startup, where I
        delved into affiliate marketing and managed marketing campaigns for
        in-house e-commerce stores. 💼
      </p>
      <br />
      <p>
        Beyond tech, I'm passionate about the outdoors, enjoying activities like
        rock climbing 🧗🏼, mountaineering ⛰️, traveling ✈️, trail running 🏃🏼, and
        indulging in great food and coffee ☕. I've explored over 35 countries
        and even scaled some of the largest cliff faces in the USA!
      </p>
    </motion.section>
  );
};
