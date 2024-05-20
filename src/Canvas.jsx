import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useTexture,
  RandomizedLight,
  Environment,
  Center,
  OrbitControls,
} from "@react-three/drei";
import ShirtFullModel from "./Shirt";

const AppCanvas = ({ position = [0, 0, 3], fov = 60 }) => {
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
        position={[5, 15, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 15, 10]}
      />
      <Center>
        {/* <SuitModel /> */}
        <ShirtFullModel />
        {/* <FullSleeveModel /> */}
      </Center>
    </Canvas>
  );
};

function BackgroundColor() {
  // const snap = useSnapshot(state);
  const backGroundRef = useRef();

  // useFrame((state, delta) => {
  //   easing.dampC(backGroundRef.current, snap.color, 0.25, delta);
  // });
  return <color ref={backGroundRef} attach="background" args={["#444444"]} />;
}

export default AppCanvas;
