import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, softShadows } from "@react-three/drei";
import a2r from "../utils/angleToRadians";

import Floor from "./animation/Floor";
import Name from "./animation/Name";
import Macbook from "./animation/Macbook";

softShadows({
	frustum: 3.75,
	size: 0.005,
	near: 9.5,
	samples: 25,
	rings: 11, // Rings (default: 11) must be a int
});

const Three = () => {
	const orbitControlsRef = useRef();

	useFrame(state => {
		const {
			mouse: { x, y },
		} = state;

		if (!!orbitControlsRef.current) {
			orbitControlsRef.current.setAzimuthalAngle(a2r(x) * 20);
			orbitControlsRef.current.setPolarAngle(Math.PI / 2 - a2r(y) * 10);
		}
	});

	return (
		<Suspense fallback={null}>
			{/* Helpers de Escena */}
			{/* <axesHelper scale={10.5} /> */}
			

			{/* Luces */}
			<ambientLight intensity={1} />
			<directionalLight
				castShadow
				position={[2.5, 8, 5]}
				intensity={2.5}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-camera-far={50}
				shadow-camera-left={-10}
				shadow-camera-right={10}
				shadow-camera-top={10}
				shadow-camera-bottom={-10}
				
			/>
			<pointLight
				position={[1, 2.45, 5]}
				intensity={5}
			/>
			<pointLight
				position={[-1, 2.45, 5]}
				intensity={5}
			/>

			{/* Controld e Camera */}
			<OrbitControls
				ref={orbitControlsRef}
				makeDefault
				target={[0, 1, 0]}
				enableDamping={false}
				enablePan={false}
				enableZoom={false}
				enableRotate={false}
			/>

			{/* Composicion de Escena */}
			<Floor />
			<Name />
			<Macbook />
		</Suspense>
	);
};

export default Three;
