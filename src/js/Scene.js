import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export default function Scene() {

	return (
		<>
			<PerspectiveCamera position={[0, 0, 10]} fov={45} />
			<OrbitControls enableDamping />

		</>
	)
}
