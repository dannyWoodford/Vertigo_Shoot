import './css/main.scss'

import { Canvas } from '@react-three/fiber'
// import { Stats } from '@react-three/drei'

// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'

import Scene from './js/Scene'

// studio.initialize()
// studio.extend(extension)

export default function App() {
	return (
		<div className='App'>
			<Canvas>
				{/* <Stats className='stats' /> */}
				<Scene />
			</Canvas>
		</div>
	)
}
