import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import { FaReact } from 'react-icons/fa';
import memberDashboard from '@/public/memberDashboard.png';
import airswapWeb from '@/public/airswapWeb.png';
import wrapeth from '@/public/wrapeth.png';
import rom from '@/public/rom.png';
import Kaching from '@/public/kaching.png';
import octav3 from '@/public/octav3.png';
import designSystem from '@/public/designSystem.png';
import React from 'react';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Director of Marketing - Starr Conversions LLC',
    location: 'New York City Metropolitan Area',
    description:
      'As the Marketing Director in a small, fast-paced startup, I managed and analyzed media campaigns using Facebook Ads and Google AdWords, while also directing operations for Shopify eCommerce stores, achieving over $1 million in annual revenue.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2014 - Dec 2020',
  },
  {
    title: 'Full-stack Development program - Flatiron School',
    location: 'Remote',
    description:
      'Full-stack engineering program with a focus on: JavaScript, React, Ruby, Ruby on Rails, REST API, Sinatra, and Active Record. This experience was pivital in teaching me "how to learn" and think like an engineer.',
    icon: React.createElement(LuGraduationCap),
    date: 'Completed April 2022',
  },
  {
    title: 'Software Developer - RaidGuild',
    location: 'Remote',
    description:
      'I freelanced as a front-end developer, acquiring valuable experience with Web3 technology. During my tenure at RaidGuild, I collaborated with multiple teams to create new open-source applications and sustain existing applications serving as public goods.',
    icon: React.createElement(FaReact),
    date: 'Aug 2022 - June 2023',
  },
  {
    title: 'Web Developer - AirSwap',
    location: 'Remote',
    description:
      "My primary contribution to AirSwap has been the front-end development of the Member Dashboard app. Additionally, I worked on maintaining and developing new features for AirSwap's decentralized trading product, which handles over $1.4 billion in annual volume. My work as a web developer involved using TypeScript, React, Tailwind, Styled-Components, and Ethers.js.",
    icon: React.createElement(FaReact),
    date: 'May 2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'AirSwap Member Dashboard',
    description:
      'Users can stake AST tokens, vote on proposals that affect the AirSwap protocol, and claim rewards from a pool.',
    contributions:
      'Front-end development. I built the staking modal, wallet connection, and various reusable UI components',
    tags: ['TypeScript', 'JavaScript', 'React', 'Tailwind', 'Web3', 'Wagmi'],
    github: 'https://github.com/airswap/airswap-voter-rewards',
    app: 'https://dao.airswap.eth.limo',
    demo: 'https://vimeo.com/874258804?share=copy',
    imageUrl: memberDashboard,
  },
  {
    title: 'AirSwap Web',
    description:
      'Decentralized exchange that has facilitated over $1.4bn in trading volume annually.',
    contributions:
      'I navigated its extensive codebase, developing new features and resolving issues in existing functionalities.',
    tags: [
      'React',
      'TypeScript',
      'Styled-Components',
      'Redux',
      'Ethers.js',
      'Web3',
    ],
    github: 'https://github.com/airswap/airswap-web',
    app: 'https://swap.eth.limo/#/',
    demo: undefined,
    imageUrl: airswapWeb,
  },
  {
    title: 'WrapETH',
    description:
      "A UI where users can wrap and unwrap ETH, or a chain's native asset, with no fees.",
    contributions:
      'I upgraded the app to use modern Ethereum libraries, such as RainbowKit and Wagmi.',
    tags: ['TypeScript', 'React', 'Next.js', 'Chakra-UI', 'Wagmi'],
    github: 'https://github.com/raid-guild/wrapeth',
    app: 'https://wrapeth.com',
    demo: 'https://vimeo.com/766531266?share=copy',
    imageUrl: wrapeth,
  },
  {
    title: 'Rite of Moloch',
    description:
      'Rite of Moloch acts as HR for DAOs, streamlining the onboarding process for new members. It offers administrators the ability to oversee and monitor new member engagement, while allowing prospective members to signal their commitment by staking tokens.',
    contributions:
      'The lead front-end developer. I built features that enable users to stake tokens, creating a user-friendly form for new DAO creation, and developing a metrics dashboard where admin can monitor new members.',
    tags: ['TypeScript', 'React', 'Next.js', 'Chakra-UI', 'Wagmi'],
    github: 'https://github.com/rite-of-moloch/RiteOfMoloch-v1.0',
    app: 'https://rom.wtf',
    demo: 'https://vimeo.com/802525256?share=copy',
    imageUrl: rom,
  },
  {
    title: 'RaidGuild Design System',
    description:
      'Design system for RaidGuild-themed reusable components built with Storybook and Chakra UI.',
    contributions:
      'Upgraded the Number Input component with React-hook-form, and the Wallet Connect button components',
    tags: ['TypeScript', 'Storybook', 'Chakra-UI', 'React-hook-form'],
    github: 'https://github.com/raid-guild/design-system',
    app: undefined,
    demo: undefined,
    imageUrl: designSystem,
  },
  {
    title: 'Kaching',
    description:
      'A Web3 wallet interface that utilizes the Keyp API, facilitating user sign-ins via Google or Discord using account abstraction. This app aims to solve the problem of Web3 UX being too complicated by offering more familiar login experiences powered by OAuth2.',
    contributions:
      'As the sole contributor, I developed the entire application in collaboration with a UX designer. The key features include the integration of Keyp API, enabling users to create a non-custodial cryptocurrency wallet and programmatically transfer funds to other users.',
    tags: [
      'TypeScript',
      'Node.js',
      'React',
      'Next.js',
      'Chakra-UI',
      'REST API',
    ],
    github: 'https://github.com/personnamedmike/KachingETHDenver',
    app: 'https://kaching-eth-denver.vercel.app/login',
    demo: 'https://vimeo.com/817957065',
    imageUrl: Kaching,
  },
  {
    title: 'OCTAV3',
    description:
      "Earn from your music NFTs. This project was created during the ETHGlobal 'Metabolism' hackathon in August 2022.",
    contributions:
      'Contructed various React components for the header and Web3 connections, styled with Tailwind CSS.',
    tags: ['JavaScript', 'React', 'TailwindCSS', 'Ethers.js'],
    github: undefined,
    app: 'https://www.octav3.com/',
    demo: undefined,
    imageUrl: octav3,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Styled-Components',
  'Redux',
  'GraphQL',
  'Web3',
  'Ethers.js',
  'Wagmi',
  'Responsive design',
  'Web development',
] as const;
