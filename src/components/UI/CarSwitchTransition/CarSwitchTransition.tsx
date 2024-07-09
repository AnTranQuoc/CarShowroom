import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { LoaderProps } from "../../../lib/types/types";
import "./CarSwitchTransition.css";

const CarSwitchTransition = ({ selectedCar }: LoaderProps) => {
  const [pulsateIcon, setPulsateIcon] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPulsateIcon(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Html fullscreen className="car-switch-transition">
      <img
        src={selectedCar.logo}
        width={150}
        height={150}
        alt={selectedCar.manufacturer}
        className={`${pulsateIcon ? "animate-pulse" : ""}`}
      />
      <video className="full-screen-video" autoPlay muted loop src={selectedCar.video}>
      </video>
    </Html>
  );
};

export default CarSwitchTransition;
