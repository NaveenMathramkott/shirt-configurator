import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "./store/store";

function FullSleeveModel(props) {
  const snap = useSnapshot(state);
  const texture = useTexture(`/${snap.decal}.png`);

  const { nodes, materials } = useGLTF("/full-sleeve-real-shirt.glb");
  useFrame((state, delta) => {
    easing.dampC(materials.Back.color, snap.color, 0.25, delta);
    easing.dampC(materials.Front.color, snap.color, 0.25, delta);
    easing.dampC(materials.Sleeve_Left.color, snap.color, 0.25, delta);
    easing.dampC(materials.Sleeve_Right.color, snap.color, 0.25, delta);
  });
  return (
    <group {...props} dispose={null}>
      <group scale={0.05}>
        <mesh
          geometry={nodes.Shirt_OBJ_2.geometry}
          material={materials.Sleeve_Right}
        />
        <mesh
          geometry={nodes.Shirt_OBJ_3.geometry}
          material={materials.Sleeve_Left}
        />
        <mesh geometry={nodes.Shirt_OBJ_4.geometry} material={materials.Back} />
        <mesh
          geometry={nodes.Shirt_OBJ_5.geometry}
          material={materials.Shirt_Middle_Boundry}
        />
        <mesh
          geometry={nodes.Shirt_OBJ_6.geometry}
          material={materials.Cuffs_Boundry}
        />
        <mesh
          geometry={nodes.Shirt_OBJ_7.geometry}
          material={materials.Pockert_Boundry}
        />
        <mesh
          geometry={nodes.Shirt_OBJ_8.geometry}
          material={materials.Bottons}
        />
        <mesh
          geometry={nodes.Shirt_OBJ_9.geometry}
          material={materials.Bottons_Threads}
        />
        <mesh geometry={nodes.Shirt_OBJ_1.geometry} material={materials.Front}>
          <Decal
            // debug
            position={[0, 0, 5]}
            rotation={[0, 0, 0]}
            scale={[35, 80, 20]}
            map={texture}
            polygonOffsetFactor={-10}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/full-sleeve-real-shirt.glb");

export default FullSleeveModel;
