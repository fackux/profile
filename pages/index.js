import { Canvas, useFrame } from "@react-three/fiber";
import Three from "../components/Three";
import * as THREE from "three";

const Homepage = () => {
	return (
		<Canvas
			camera={{ fov: 32 }}
			shadows={THREE.PCFSoftShadowMap}
			onCreated={ctx => {
				ctx.gl.physicallyCorrectLights = true;
			}}
		>
			<Three />
		</Canvas>
	);
};

export default Homepage;
