import { Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { SpotlightProp } from "../../../lib/models/ModelImports";

const Floor = () => {
  const [aoMap, colorMap, disMap, roughnessMap] = useLoader(
    TextureLoader,
    [
      "/floor/AmbientOcclusion.webp",
      "/floor/111.jpg",
      "/floor/Displacement.webp",
      "/floor/NormalGL.webp",
      "/floor/Roughness.webp",
    ]
  );

  const scale = 25;
  const planeWidth = 250;
  const planeHeight = 250;

  [aoMap, colorMap, disMap, roughnessMap].forEach((tex) => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(scale, scale);
  });

  const material = new THREE.MeshStandardMaterial({
    aoMap: aoMap,
    aoMapIntensity: 1,
    map: colorMap,
    displacementMap: disMap,
    displacementScale: 1,
    roughnessMap: roughnessMap,
    roughness: 1,
    metalness: 0.3,
  });

  const spotlightProps: {
    position: [number, number, number];
    rotation: [number, number, number];
  }[] = [
    {
      position: [0, -2.3, -40],
      rotation: [0, 0, 0],
    },
    {
      position: [0, -2.3, 40],
      rotation: [0, Math.PI, 0],
    },
    {
      position: [40, -2.3, 0],
      rotation: [0, Math.PI * 5.5, 0],
    },
    {
      position: [-40, -2.3, 0],
      rotation: [0, Math.PI * 2.5, 0],
    },
  ];

  return (
    <>
      <Plane
        args={[planeWidth, planeHeight]}
        material={material}
        receiveShadow
        rotation-x={-Math.PI / 2}
        position-y={-2.83}
      />
      {spotlightProps.map((spotlight, index) => (
        <SpotlightProp
          key={index}
          position={spotlight.position}
          rotation={spotlight.rotation}
        />
      ))}
    </>
  );
};

export default Floor;
