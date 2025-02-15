/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Ferrari_F12berlinetta_2014Base_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014Engine_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014Grille1_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014Grille2_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014Kit0_Badge_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014Kit0_Carbon2_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014Kit0_Coloured_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014Kit0_Interior_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014Kit0_Paint_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014Light_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014ManufacturerPlate_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014SeatBelt_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014Window_Geo_lodA: THREE.Mesh;
    Ferrari_F12berlinetta_2014RearEmissions: THREE.Mesh;
    Ferrari_F12berlinetta_2014Kit0_MirrorPaint: THREE.Mesh;
    Ferrari_F12berlinetta_2014_Wheel_1ACombined3DWheel_3DWheel_fron: THREE.Mesh;
    Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta002: THREE.Mesh;
    Ferrari_F12berlinetta_2014_Wheel_1ACombined3DWheel_3DWheel_: THREE.Mesh;
    Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta001: THREE.Mesh;
    Ferrari_F12berlinetta_2014_Wheel_1ACombined3DWheel_3DWheel_001: THREE.Mesh;
    Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta005: THREE.Mesh;
    Ferrari_F12berlinetta_2014_Wheel_1ACombined3DWheel_3DWheel_002: THREE.Mesh;
    Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta003: THREE.Mesh;
    Ferrari_F12berlinetta_2014_Wheel_1ACombined3DWheel_3DWheel_003: THREE.Mesh;
    Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta004: THREE.Mesh;
  };
  materials: {
    Paint2: THREE.MeshPhysicalMaterial;
    Engine: THREE.MeshStandardMaterial;
    Grille1: THREE.MeshStandardMaterial;
    Grille2: THREE.MeshStandardMaterial;
    Badge: THREE.MeshPhysicalMaterial;
    Interior: THREE.MeshStandardMaterial;
    BodyPaint: THREE.MeshPhysicalMaterial;
    Lights: THREE.MeshStandardMaterial;
    Plate: THREE.MeshPhysicalMaterial;
    Seatbelt: THREE.MeshStandardMaterial;
    Glass: THREE.MeshPhysicalMaterial;
    RearEmission: THREE.MeshStandardMaterial;
    Wheel: THREE.MeshPhysicalMaterial;
    Caliper: THREE.MeshStandardMaterial;
    ["Wheel.003"]: THREE.MeshPhysicalMaterial;
    ["Caliper.002"]: THREE.MeshStandardMaterial;
    ["Wheel.004"]: THREE.MeshPhysicalMaterial;
    ["Caliper.003"]: THREE.MeshStandardMaterial;
  };
};

export function F12(props: any) {
  const { nodes, materials } = useGLTF("models/f12.glb") as GLTFResult;

  useEffect(() => {
    // car paint
    Object.entries(materials).map((material) => {
      if (material[0] == "BodyPaint") {
        material[1].color = new THREE.Color(props.color.hexCode);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props]);

  return (
    <group {...props} dispose={null} scale={4} position={[0, -1.66, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Base_Geo_lodA.geometry}
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Engine_Geo_lodA.geometry}
        material={materials.Engine}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Grille1_Geo_lodA.geometry}
        material={materials.Grille1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Grille2_Geo_lodA.geometry}
        material={materials.Grille2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Kit0_Badge_Geo_lodA.geometry}
        material={materials.Badge}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Ferrari_F12berlinetta_2014Kit0_Carbon2_Geo_lodA.geometry
        }
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Ferrari_F12berlinetta_2014Kit0_Coloured_Geo_lodA.geometry
        }
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Ferrari_F12berlinetta_2014Kit0_Interior_Geo_lodA.geometry
        }
        material={materials.Interior}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Kit0_Paint_Geo_lodA.geometry}
        material={materials.BodyPaint}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Light_Geo_lodA.geometry}
        material={materials.Lights}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Ferrari_F12berlinetta_2014ManufacturerPlate_Geo_lodA.geometry
        }
        material={materials.Plate}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014SeatBelt_Geo_lodA.geometry}
        material={materials.Seatbelt}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Window_Geo_lodA.geometry}
        material={materials.Glass}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014RearEmissions.geometry}
        material={materials.RearEmission}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ferrari_F12berlinetta_2014Kit0_MirrorPaint.geometry}
        material={materials.Paint2}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Ferrari_F12berlinetta_2014_Wheel_1ACombined3DWheel_3DWheel_fron
            .geometry
        }
        material={materials.Wheel}
        position={[-0.799, 0.224, 1.354]}
        rotation={[-2.95, 0, 0]}
        scale={[-0.85, -1, -1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta002
              .geometry
          }
          material={materials.Caliper}
          position={[0.006, -0.034, -0.174]}
          rotation={[1.379, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Ferrari_F12berlinetta_2014_Wheel_1ACombined3DWheel_3DWheel_
            .geometry
        }
        material={materials.Wheel}
        position={[0.777, 0.224, -1.363]}
        rotation={[0.192, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta001
              .geometry
          }
          material={materials.Caliper}
          position={[0.006, 0.032, 0.163]}
          rotation={[-1.763, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Ferrari_F12berlinetta_2014_Wheel_1ACombined3DWheel_3DWheel_001
            .geometry
        }
        material={materials.Wheel}
        position={[-0.777, 0.224, -1.363]}
        rotation={[-2.95, 0, 0]}
        scale={-1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta005
              .geometry
          }
          material={materials.Caliper}
          position={[0.006, 0.032, 0.163]}
          rotation={[-1.763, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Ferrari_F12berlinetta_2014_Wheel_1ACombined3DWheel_3DWheel_002
            .geometry
        }
        material={materials["Wheel.003"]}
        position={[0.777, 0.224, -1.363]}
        rotation={[0.192, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta003
              .geometry
          }
          material={materials["Caliper.002"]}
          position={[0.006, 0.032, 0.163]}
          rotation={[-1.763, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Ferrari_F12berlinetta_2014_Wheel_1ACombined3DWheel_3DWheel_003
            .geometry
        }
        material={materials["Wheel.004"]}
        position={[0.799, 0.224, 1.354]}
        rotation={[0.192, 0, 0]}
        scale={[0.85, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Ferrari_F12berlinetta_2014CombinedCalliperBodyExotic6_Insta004
              .geometry
          }
          material={materials["Caliper.003"]}
          position={[0.006, -0.034, -0.174]}
          rotation={[1.379, 0, 0]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("models/f12.glb");
