import { Canvas, useFrame } from "@react-three/fiber";
import Three from "../components/Three";
import * as THREE from "three";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";

const Homepage = () => {
	return (
		<Canvas
			camera={{ fov: 32 }}
			shadows={THREE.PCFSoftShadowMap}
			onCreated={ctx => {
				ctx.gl.physicallyCorrectLights = true;
			}}
		>
			<fog attach="fog" args={["white", 6, 10]} />

			<EffectComposer smaa>
				<Bloom />
				<Three />
			</EffectComposer>

			
			
		</Canvas>
	);
};

export default Homepage;
