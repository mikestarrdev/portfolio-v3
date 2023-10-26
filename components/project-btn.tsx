import React from 'react';
import { AiFillGithub, AiOutlineVideoCamera } from 'react-icons/ai';
import { MdOutlineRocketLaunch } from 'react-icons/md';

export const ProjectBtn = ({
  type,
}: {
  type: 'github' | 'project' | 'demo';
}) => {
  const text = () => {
    if (type === 'demo') {
      return 'Demo';
    } else if (type === 'github') {
      return 'GitHub';
    } else {
      return 'App';
    }
  };

  const icon = () => {
    if (type === 'demo') {
      return <AiOutlineVideoCamera />;
    } else if (type === 'github') {
      return <AiFillGithub />;
    } else {
      return <MdOutlineRocketLaunch />;
    }
  };

  return (
    <button className="flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
      <div className="flex flex-row items-center">
        {icon()}
        <span className="ml-1">{text()}</span>
      </div>
    </button>
  );
};
