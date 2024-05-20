import { useGLTF } from "@react-three/drei";
import { state } from "./store/store";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";

function ShirtFullModel(props) {
  const snap = useSnapshot(state);
  const itemRefs = useRef([]);
  const texture = useLoader(THREE.TextureLoader, `/${snap.decal}.png`);
  const { nodes, materials } = useGLTF("/shirt_full.glb");

  useFrame((state, delta) => {
    itemRefs.current.forEach((ref) => {
      easing.dampC(ref.color, snap.color, 0.15, delta);
    });
  });

  const addToRefs = (element) => {
    if (element && !itemRefs.current.includes(element)) {
      itemRefs.current.push(element);
    }
  };

  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.014, 0.051, 1.902]}
        rotation={[-1.528, 0, 0]}
        scale={0.15}
      >
        <mesh
          geometry={nodes.Object_2002.geometry}
          material={materials.Bottons_Threads}
          material-roughness={10}
        />
        <mesh
          geometry={nodes.Object_2002_7.geometry}
          material={materials.Front}
          material-roughness={10}
        >
          <meshBasicMaterial
            ref={addToRefs}
            map={texture}
            transparent={false}
            opacity={1}
            depthWrite={true}
            blending={THREE.NormalBlending}
          />
        </mesh>
        <mesh
          geometry={nodes.Object_2002_1.geometry}
          material={materials.Back}
          material-roughness={1}
        >
          <meshBasicMaterial
            ref={addToRefs}
            map={texture}
            transparent={false}
            opacity={1}
            depthWrite={true}
            blending={THREE.NormalBlending}
          />
        </mesh>

        <mesh
          geometry={nodes.Object_2002_2.geometry}
          material={materials.Bottons}
          material-roughness={10}
        />
        <mesh
          geometry={nodes.Object_2002_3.geometry}
          material={materials.Pockert_Boundry}
          material-roughness={10}
        />
        <mesh
          geometry={nodes.Object_2002_4.geometry}
          material={materials.Sleeve_Left}
          // material-roughness={10}
        >
          <meshBasicMaterial
            ref={addToRefs}
            map={texture}
            transparent={false}
            opacity={1}
            depthWrite={true}
            blending={THREE.NormalBlending}
          />
        </mesh>

        <mesh
          geometry={nodes.Object_2002_5.geometry}
          material={materials.Sleeve_Right}
          // material-roughness={10}
        >
          <meshBasicMaterial
            ref={addToRefs}
            map={texture}
            transparent={false}
            opacity={1}
            depthWrite={true}
            blending={THREE.NormalBlending}
          />
        </mesh>

        <mesh
          geometry={nodes.Object_2002_6.geometry}
          material={materials.Cuffs_Boundry}
          material-roughness={10}
        />

        <mesh
          geometry={nodes.Object_2002_8.geometry}
          material={materials.Shirt_Middle_Boundry}
          material-roughness={10}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/shirt_full.glb");

export default ShirtFullModel;
