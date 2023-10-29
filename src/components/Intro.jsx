import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Avik Nayak
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Tech Enthusiast & Web developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I have a deep love for programming and a knack for building things. <br/>I
        find immense satisfaction in the art of coding. All the things that i
        built, can be found on my Github Profile{" "}
        <a
          href="https://github.com/AvikNayak22"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          AvikNayak22.
        </a>{" "}
      </p>
    </div>
  );
}

export default Intro;
