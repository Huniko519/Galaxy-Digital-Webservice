import Particles from "react-tsparticles";
import "./particle.scss";

const Particle = () => {
  return (
    <Particles
      className="particle"
      options={{
        fullScreen: true,
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                color: "#4caf50",
                opacity: 0.5,
              },
              line_linked: {
                color: "#4caf50",
                opacity: 0.3,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#4caf50",
          },
          links: {
            color: "#4caf50",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
