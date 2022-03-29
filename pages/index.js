import { Canvas, useFrame } from "@react-three/fiber";
import Three from "../components/Three";

const Homepage = () => {
	return (
		<Canvas camera={{fov:32}} shadows>
			<Three />
		</Canvas>
	);
};

export default Homepage;
