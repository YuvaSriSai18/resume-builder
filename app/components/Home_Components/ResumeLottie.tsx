"use client";
import React from "react";
import Lottie from "lottie-react";
import resume_lottie from "../../../public/resume_lottie.json";
export default function ResumeLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: resume_lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie animationData={resume_lottie} loop={true} autoplay={true} />
    </div>
  );
}
