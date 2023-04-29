import './css/main.scss'

import { Canvas } from '@react-three/fiber'
// import { Stats } from '@react-three/drei'

import Scene from './js/Scene'

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
