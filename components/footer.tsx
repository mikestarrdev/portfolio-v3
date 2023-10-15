import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Mike Starr. All rights reserved.
      </small>
      <p className="text-xs font-semibold">
        <a href='https://github.com/personnamedmike' target="_">GitHub</a>{" "}|{" "}
        <a href='https://linkedin.com/in/mike-starr' target="_">LinkedIn</a>{" "}|{" "}
        <a href='https://mirror.xyz/starrdev.eth' target="_">Blog</a>{" "}|{" "}
        <a href='/mike_starr_cv.pdf' target="_">Resume</a>
      </p>
    </footer>
  );
}
