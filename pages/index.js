import { Canvas, useFrame } from "@react-three/fiber";
import Three from "../components/Three";
import * as THREE from "three";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";

const Homepage = () => {
	return (
		<Canvas
			gl={{antialias:true, physicallyCorrectLights: true}}
			camera={{ fov: 32 }}
			shadows={THREE.PCFSoftShadowMap}
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
