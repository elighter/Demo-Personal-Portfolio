import React, { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    const loadParticles = async () => {
      // @ts-ignore
      await window.particlesJS.load("particles-js", {
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#00A3FF",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00A3FF",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5,
              },
            },
          },
        },
        retina_detect: true,
      });
    };

    loadParticles();
  }, []);

  return (
    <div
      id="particles-js"
      className="absolute inset-0 z-0"
      style={{ backgroundColor: "transparent" }}
    />
  );
};

export default ParticlesBackground;
