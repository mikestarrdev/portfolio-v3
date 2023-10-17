'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
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
        I transitioned from digital marketing to software engineering. Now, I'm
        a developer at AirSwap, a decentralized protocol that has facilitated
        trades worth over $3.68 billion in value. I'm passionate about crafting
        top-notch user experiences. My skill set includes React, TypeScript,
        JavaScript, CSS, and HTML. But, my goal? Building apps that truly
        connect with users.
      </p>
      <h3 className="my-4 text-2xl font-semibold">The beginning</h3>
      <p>
        In 2020, I dove into software development, starting with JavaScript.
        Feeling the pull, I took it up a notch. I enrolled at Flatiron School
        for full-stack software engineering. There, I got hands-on with
        languages and tech: JavaScript, React, Ruby, Ruby on Rails, REST API,
        Sinatra, and Active Record. But Flatiron wasn't just about coding; it
        taught me how to learn. That experience boosted my foundation in
        software dev and my confidence.
      </p>
      <h3 className="my-4 text-2xl font-semibold">
        Entering the world of blockchain
      </h3>
      <p>
        After graduation, I explored the blockchain ecosystem by participating
        in renowned hackathons including ETH Global New York, ETH Global
        Metabolism, ETH Online 2022, and ETH Denver 2023. Notably, during ETH
        Global Metabolism, my team was awarded a prize by Filecoin for our
        innovative use of nft.storage, which leverages IPFS.
      </p>
      <h3 className="my-4 text-2xl font-semibold">Journey with RaidGuild</h3>
      <p>
        August 2022 was special. I teamed up with the folks at RaidGuild. Moving
        from collaboration to full membership, it was a game-changer for my
        career. It was more than development; I learned the ins and outs of
        DAOs.
      </p>
      <h3 className="my-4 text-2xl font-semibold">AirSwap and beyond</h3>
      <p>
        By Spring 2023, I joined the AirSwap team. We're all about
        developer-focused solutions. Our main product? A decentralized exchange
        (DEX) that allows users to engage in server-based trading with
        professional market-makers. Additionally, we offer peer-to-peer OTC
        trades of ERC20 tokens.
      </p>
    </motion.section>
  );
}
