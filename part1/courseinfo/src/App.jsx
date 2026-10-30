import { useState } from 'react'
import './App.css'

function App() {
	const part1 = "Part 1";
	const part2 = "Part 2";
	const part3 = "Part 3";

	return (
		<Mainf />
	)
}

function Mainf()
{
	return (
		<div>
			<span>
				<h1 className='h1_part'>{part1}</h1>
			</span>
			<span>
				<h1 className='h1_part'>{part2}</h1>
			</span>
			<span>
				<h1 className='h1_part'>{part3}</h1>
			</span>
		</div>
	)
}

export default App
