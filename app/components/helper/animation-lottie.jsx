"use client"
import dynamic from "next/dynamic";
// import Lottie from "lottie-react";

// Disable SSR for this component
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationPath,
  //   style: {
  //     width: '95%',
  //   }
  // };

  return (
    // <Lottie {...defaultOptions} />
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;