import { Text, MeshDistortMaterial } from "@react-three/drei";

const Name = () => {
	return (
		<group>
			<Text
				color="#850099"
				rotation={[0, 0, 0]}
				position={[-1.3, 1.3, 0]}
				scale={2.75}
				castShadow
				font="AlfaSlabOne-Regular.ttf"
			>
				FACUNDO
			</Text>

			<Text
				color="#000"
				rotation={[0, 0, 0]}
				position={[-1.3, 0.7, 0]}
				scale={3}
				castShadow
				font="Rock3D-Regular.ttf"
			>
				<MeshDistortMaterial attach="material" color="red" speed={0.2} distort={0.5} radius={0.5} />
				DEVELOPER
			</Text>

			<Text
				color="#000"
				rotation={[0, 0, 0]}
				position={[-1.3, 1, 0]}
				scale={2}
				castShadow
				font="AlfaSlabOne-Regular.ttf"
			>
				LOPEZ
			</Text>
		</group>
	);
};

export default Name;
