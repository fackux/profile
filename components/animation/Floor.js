const Floor = () => {
	return (
		<mesh position={[0, 0, 0]} receiveShadow>
			<boxBufferGeometry attach="geometry" args={[20, 0.05, 20]} />
			<meshStandardMaterial attach="material" color={"white"} />
		</mesh>
	);
};

export default Floor;
