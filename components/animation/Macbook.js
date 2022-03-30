import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import GSAP from "gsap";
import a2r from "../../utils/angleToRadians";
import * as THREE from "three";

export default function Macbook(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF("/models/macbook/scene.gltf");
	const { actions, mixer } = useAnimations(animations, group);

	useEffect(() => {
		if (!!group.current) {
			const rotateOnEnter = GSAP.timeline({
				repeat: -1,
			});
			rotateOnEnter.paused(true);
			rotateOnEnter.to(group.current.rotation, {
				y: a2r(360),
				duration: 5,
				ease: "linear",
			});

			const tl = GSAP.timeline({
				onComplete: () => {
					const subclip = THREE.AnimationUtils.subclip(animations[0], "Take_001", 0, 100);
					const animation = mixer.clipAction(subclip, group.current, THREE.LoopOnce);
					animation.clampWhenFinished = true;
					animation.setLoop(THREE.LoopOnce);
					animation.play();
					rotateOnEnter.play();
				},
				delay: 2,
				stagger: 0.1,
			});

			tl.from(
				group.current.position,
				{
					z: -10,
					y: 2,
					alpha: 0,
					duration: 2,
				},
				"Simultaneously"
			);

			tl.to(
				group.current.rotation,
				{
					x: a2r(360),
					duration: 2,
				},
				"Simultaneously"
			);
		}
	}, [group, actions.Animation, animations, mixer]);

	return (
		<group ref={group} {...props} dispose={null} scale={5} position={[1.1, 0.5, 0]}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} userData={{ name: "Sketchfab_model" }}>
					<group name="root" userData={{ name: "root" }}>
						<group
							name="GLTF_SceneRootNode"
							rotation={[Math.PI / 2, 0, 0]}
							userData={{ name: "GLTF_SceneRootNode" }}
						>
							<group
								name="Bevels_2"
								position={[0, 0.01, -0.1]}
								scale={[0.27, 0.27, 0.27]}
								userData={{ name: "Bevels_2" }}
							>
								<group
									name="Empty_1"
									position={[0, 0, 0]}
									rotation={[-Math.PI, 0, 0]}
									scale={[-0.04, 0.04, 0.04]}
									userData={{ name: "Empty_1" }}
								>
									<group
										name="Camera_Light_0"
										position={[0, 0.08, -0.04]}
										rotation={[-1.19, 0, 0]}
										scale={[-25.38, 25.38, 25.38]}
										userData={{ name: "Camera Light_0" }}
									>
										<mesh
											name="Object_12"
											castShadow
											receiveShadow
											geometry={nodes.Object_12.geometry}
											material={materials.Camera_Light}
											userData={{ name: "Object_12" }}
										/>
									</group>
								</group>
								<mesh
									name="Object_4"
									castShadow
									receiveShadow
									geometry={nodes.Object_4.geometry}
									material={nodes.Object_4.material}
									userData={{ name: "Object_4" }}
								/>
								<mesh
									name="Object_5"
									castShadow
									receiveShadow
									geometry={nodes.Object_5.geometry}
									material={nodes.Object_5.material}
									userData={{ name: "Object_5" }}
								/>
								<mesh
									name="Object_6"
									castShadow
									receiveShadow
									geometry={nodes.Object_6.geometry}
									material={materials.Glass}
									userData={{ name: "Object_6" }}
								/>
								<mesh
									name="Object_7"
									castShadow
									receiveShadow
									geometry={nodes.Object_7.geometry}
									material={materials["Material.002"]}
									userData={{ name: "Object_7" }}
								/>
								<mesh
									name="Object_8"
									castShadow
									receiveShadow
									geometry={nodes.Object_8.geometry}
									material={nodes.Object_8.material}
									userData={{ name: "Object_8" }}
								/>
								<mesh
									name="Object_9"
									castShadow
									receiveShadow
									geometry={nodes.Object_9.geometry}
									material={materials["Space_Grey.001"]}
									userData={{ name: "Object_9" }}
								/>
							</group>
							<group
								name="Circle001_12"
								position={[0.2, 0.01, -0.1]}
								rotation={[0.01, -0.75, 1.27]}
								userData={{ name: "Circle.001_12" }}
							/>
							<group
								name="Caps_Lock_Light_3"
								position={[0, -0.01, 0]}
								scale={0.27}
								userData={{ name: "Caps Lock Light_3" }}
							>
								<mesh
									name="Object_14"
									castShadow
									receiveShadow
									geometry={nodes.Object_14.geometry}
									material={materials.Caps_Lock_Light}
									userData={{ name: "Object_14" }}
								/>
							</group>
							<group
								name="Macbook_Pro_4"
								position={[0, 0.01, -0.1]}
								rotation={[1.95, 0, 0]}
								scale={0.27}
								userData={{ name: "Macbook Pro_4" }}
							>
								<mesh
									name="Object_16"
									castShadow
									receiveShadow
									geometry={nodes.Object_16.geometry}
									material={materials["Material.001"]}
									userData={{ name: "Object_16" }}
								/>
							</group>
							<group
								name="Main_Body_5"
								position={[0, -0.01, 0]}
								scale={0.27}
								userData={{ name: "Main Body_5" }}
							>
								<mesh
									name="Object_18"
									castShadow
									receiveShadow
									geometry={nodes.Object_18.geometry}
									material={nodes.Object_18.material}
									userData={{ name: "Object_18" }}
								/>
								<mesh
									name="Object_19"
									castShadow
									receiveShadow
									geometry={nodes.Object_19.geometry}
									material={nodes.Object_19.material}
									userData={{ name: "Object_19" }}
								/>
								<mesh
									name="Object_20"
									castShadow
									receiveShadow
									geometry={nodes.Object_20.geometry}
									material={nodes.Object_20.material}
									userData={{ name: "Object_20" }}
								/>
								<mesh
									name="Object_21"
									castShadow
									receiveShadow
									geometry={nodes.Object_21.geometry}
									material={materials["Keys.001"]}
									userData={{ name: "Object_21" }}
								/>
							</group>
							<group
								name="Touch_Bar_6"
								position={[0, -0.01, 0]}
								scale={0.27}
								userData={{ name: "Touch Bar_6" }}
							>
								<mesh
									name="Object_23"
									castShadow
									receiveShadow
									geometry={nodes.Object_23.geometry}
									material={nodes.Object_23.material}
									userData={{ name: "Object_23" }}
								/>
								<mesh
									name="Object_24"
									castShadow
									receiveShadow
									geometry={nodes.Object_24.geometry}
									material={nodes.Object_24.material}
									userData={{ name: "Object_24" }}
								/>
								<mesh
									name="Object_25"
									castShadow
									receiveShadow
									geometry={nodes.Object_25.geometry}
									material={nodes.Object_25.material}
									userData={{ name: "Object_25" }}
								/>
							</group>
							<group
								name="Touch_Bar_Shot_7"
								position={[0, -0.01, 0]}
								scale={0.27}
								userData={{ name: "Touch Bar Shot_7" }}
							>
								<mesh
									name="Object_27"
									castShadow
									receiveShadow
									geometry={nodes.Object_27.geometry}
									material={materials["Touch_Bar_Shot_2021-04-02_at_18.13.28"]}
									userData={{ name: "Object_27" }}
								/>
							</group>
							<group
								name="Keyboard_8"
								position={[0, -0.01, 0]}
								scale={0.27}
								userData={{ name: "Keyboard_8" }}
							>
								<mesh
									name="Object_29"
									castShadow
									receiveShadow
									geometry={nodes.Object_29.geometry}
									material={nodes.Object_29.material}
									userData={{ name: "Object_29" }}
								/>
								<mesh
									name="Object_30"
									castShadow
									receiveShadow
									geometry={nodes.Object_30.geometry}
									material={nodes.Object_30.material}
									userData={{ name: "Object_30" }}
								/>
							</group>
							<group name="Cube_9" position={[0, -0.01, 0]} userData={{ name: "Cube_9" }}>
								<mesh
									name="Object_32"
									castShadow
									receiveShadow
									geometry={nodes.Object_32.geometry}
									material={nodes.Object_32.material}
									userData={{ name: "Object_32" }}
								/>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/models/macbook/scene.gltf");
