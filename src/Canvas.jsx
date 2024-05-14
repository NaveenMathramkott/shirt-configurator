import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
  Environment,
  Center,
  OrbitControls,
} from "@react-three/drei";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "./store/store";
import SuitModel from "./Suit";
import ShirtFullModel from "./Shirt";

const AppCanvas = ({ position = [0, 1.2, 3], fov = 50 }) => {
  return (
    <Canvas
      shadows
      camera={{ position, fov }}
      gl={{ preserveDrawingBuffer: true }}
      eventSource={document.getElementById("root")}
      eventPrefix="client"
    >
      <ambientLight intensity={0.5} />
      <BackgroundColor />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
      <Center>
        {/* <Shirt /> */}
        {/* <SuitModel /> */}
        <ShirtFullModel />
      </Center>
    </Canvas>
  );
};

function BackgroundColor() {
  const snap = useSnapshot(state);
  const backGroundRef = useRef();

  useFrame((state, delta) => {
    easing.dampC(backGroundRef.current, snap.color, 0.5, delta);
  });
  return <color ref={backGroundRef} attach="background" args={["gray"]} />;
}

function Shirt(props) {
  const snap = useSnapshot(state);
  const texture = useTexture(`/${snap.decal}.png`);
  const { nodes, materials, scene } = useGLTF("/shirt_baked_collapsed.glb");
  console.log("scene", scene);
  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );
  return (
    <mesh
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={10}
      {...props}
      dispose={null}
    >
      <Decal
        position={[0, 0.05, 0.15]}
        rotation={[0, 0, 0]}
        scale={0.1}
        map={texture}
      />
    </mesh>
  );
}

useGLTF.preload("/shirt_baked_collapsed.glb");
["/react.png", "/three2.png", "/pmndrs.png", "pattern1.png"].forEach(
  useTexture.preload
);

export default AppCanvas;
