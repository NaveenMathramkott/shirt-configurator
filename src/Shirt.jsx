import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { state } from "./store/store";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

function ShirtFullModel(props) {
  const snap = useSnapshot(state);
  const texture = useTexture(`/${snap.decal}.png`);
  const { nodes, materials } = useGLTF("/shirt_full.glb");
  useFrame((state, delta) => {
    easing.dampC(materials.Back.color, snap.color, 0.25, delta);
    easing.dampC(materials.Front.color, snap.color, 0.25, delta);
    easing.dampC(materials.Sleeve_Left.color, snap.color, 0.25, delta);
    easing.dampC(materials.Sleeve_Right.color, snap.color, 0.25, delta);
  });
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
          geometry={nodes.Object_2002_1.geometry}
          material={materials.Back}
          material-roughness={10}
        />
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
          material-roughness={10}
        />
        <mesh
          geometry={nodes.Object_2002_5.geometry}
          material={materials.Sleeve_Right}
          material-roughness={10}
        />
        <mesh
          geometry={nodes.Object_2002_6.geometry}
          material={materials.Cuffs_Boundry}
          material-roughness={10}
        />
        <mesh
          geometry={nodes.Object_2002_7.geometry}
          material={materials.Front}
          material-roughness={10}
        >
          {/* <Decal
            debug
            position={[2, 0, 3]}
            rotation={[0, 0, 0]}
            scale={[2, 2, 1]}
            map={texture}
            // anisotropy={1}
          /> */}
        </mesh>
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
