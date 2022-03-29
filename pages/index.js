import { Canvas, useFrame } from "@react-three/fiber";
import Three from "../components/Three";

const Homepage = () => {
	return (
		<Canvas
			camera={{ fov: 32 }}
			pixelRatio={1}
			shadows
			onCreated={ctx => {
				ctx.gl.physicallyCorrectLights = true;
			}}
		>
			<Three />
		</Canvas>
	);
};

export default Homepage;
