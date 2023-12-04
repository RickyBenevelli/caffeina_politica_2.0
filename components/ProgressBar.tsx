"use client";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(progress);
    };

    // Aggiungi l'event listener per l'evento di scroll
    window.addEventListener("scroll", handleScroll);

    // Pulisci l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        width: `${scrollPercentage}%`,
        height: "2px",
        backgroundColor: "#ea580c",
        zIndex: 1000,
        // transition: "width 0.1s",
      }}
      className="top-[72px] md:top-20"
    />
  );
};

export default ProgressBar;
