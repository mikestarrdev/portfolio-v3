'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { AiOutlineRead } from 'react-icons/ai';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import avatar from '../public/avatar.jpg';
import { useTheme } from '@/context/theme-context';

export const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={avatar}
              alt="Mike portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2 font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Mike,</span> an experienced{' '}
        <span className="font-bold">software developer</span> who specializes in{' '}
        <span className="font-bold">TypeScript, JavaScript and React</span>. I'm
        a team player, lifelong learner, and excited to build cool stuff.{' '}
        <span className="font-bold">Let's connect!</span>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <button>
          <Link
            href="#contact"
            className={`group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition ${
              dark && 'border border-1 border-color-white'
            }`}
            onClick={() => {
              setActiveSection('Contact');
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{' '}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
        </button>

        <button>
          <a
            className="flex items-center my-1.5 px-7 py-3 group bg-white  gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/mike_starr_cv.pdf"
            download
          >
            Download CV{' '}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </button>
        <div className="flex items-center content-center self-center space-x-2">
          <button>
            <a href="https://linkedin.com/in/mike-starr" target="_blank">
              <div className="flex flex-row items-center w-fit bg-white p-4 text-gray-700 hover:text-gray-950 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                <span>LinkedIn</span>{' '}
                <BsLinkedin className="hidden sm:block ml-1" />
              </div>
            </a>
          </button>

          <button>
            <a href="https://github.com/personnamedmike" target="_blank">
              <div className="flex flex-row items-center w-fit bg-white p-4 text-gray-700 hover:text-gray-950 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                <span>GitHub</span>
                <FaGithubSquare className="hidden sm:block" />
              </div>
            </a>
          </button>
          <button>
            <a href="https://mirror.xyz/starrdev.eth" target="_blank">
              <div className="flex flex-row items-center w-fit bg-white p-4 text-gray-700 hover:text-gray-950 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                <span>Blog</span> <AiOutlineRead className="hidden sm:block" />
              </div>
            </a>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
