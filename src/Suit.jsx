import { useGLTF } from "@react-three/drei";
import { state } from "./store/store";
import { useSnapshot } from "valtio";

function SuiteModel(props) {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/suite-blend.glb");
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.0014}
        rotation={[-1.6, 0, 0]}
        position={[0, 0.2, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.uniform_1001}
          position={[19.419, -208.792, 285.136]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.uniform_1001}
          position={[209.547, -87.446, 428.795]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.uniform_1001}
          position={[-65.503, -200.122, 163.478]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.uniform_1001}
          position={[149.44, -208.192, 137.676]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.uniform_1001}
          position={[-3.577, -199.964, 238.198]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.uniform_1001}
          position={[-58.964, -134.2, 238.892]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.uniform_1001}
          position={[100.569, -137.497, 259.679]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.uniform_1001}
          position={[-209.949, -86.882, 428.873]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["-Button1"]}
          position={[15.766, -138.943, 126.256]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.uniform_1001}
          position={[-83.599, -137.487, -333.057]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials["1_blinn6SG"]}
          position={[11.072, -138.608, 368.29]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials["1_blinn6SG"]}
          position={[12.59, -143.721, 296]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials["1_blinn6SG"]}
          position={[14.209, -147.74, 224.705]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials["1_blinn6SG"]}
          position={[14.313, -148.192, 154.118]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials["1_blinn6SG"]}
          position={[13.833, -149.787, 87.03]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.blinn6SG}
          position={[26.464, -205.067, 179.948]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.blinn6SG}
          position={[44.622, -200.361, 63.378]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials["1_blinn6SG_6"]}
          position={[-253.245, 19.437, -52.225]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials["1_blinn6SG_6"]}
          position={[-251.161, 25.35, -4.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["Button_1061-Button"]}
          position={[-1.058, 22.826, -26.788]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials["1_blinn6SG_6"]}
          position={[-251.677, 23.641, -18.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials["1_blinn6SG_6"]}
          position={[-252.213, 21.336, -35.212]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials["1_blinn6SG_6"]}
          position={[250.646, 24.958, -3.658]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials["1_blinn6SG_6"]}
          position={[251.132, 23.235, -17.612]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials["1_blinn6SG_6"]}
          position={[251.682, 20.836, -34.778]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials["1_blinn6SG_6"]}
          position={[252.737, 18.842, -51.9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials["-Button"]}
          position={[3.902, -133.08, 405.849]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials["-Button"]}
          position={[2.298, -137.716, 113.109]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials["-Button"]}
          position={[3.192, -60.816, 570.559]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Button_1062-Button"]}
          position={[-26.702, -199.625, 122.562]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["NKNK-Button"]}
          position={[5.044, -155.102, 225.987]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.uniform_1001}
          position={[-1.21, -135.048, 288.236]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.uniform_1001}
          position={[-63.956, -145.819, 234.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.uniform_1001}
          position={[73.998, -151.476, 261.535]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.uniform_1001}
          position={[-38.347, -137.774, 369.58]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/suite-blend.glb");

export default SuiteModel;
