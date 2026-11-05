import { useState } from 'react'
import './App.css'

const exes = [10, 7, 14]

function App() {
	return (
		<>
			<Mainf />
			<Sum_lf />
		</>
	)
}

function Mainf() {
	const kurs = "Kurs fullstack"
	const part1 = "Part 1";
	const part2 = "Part 2";
	const part3 = "Part 3";

	return (
		<div>
			<Title_lf kurs={kurs} />
			<div className='zawartosc_class'>
				<span>
					<h1 className='h1_part'>{part1}</h1>
					<font>Liczba zadań: {exes[0]}</font>
				</span>
				<span>
					<h1 className='h1_part'>{part2}</h1>
					<font>Liczba zadań: {exes[1]}</font>
				</span>
				<span>
					<h1 className='h1_part'>{part3}</h1>
					<font>Liczba zadań: {exes[2]}</font>
				</span>
			</div>
		</div>
	)
}

function Sum_lf()
{
	return (
		<div>
			<span>
				<font>W sumie: {exes[0] + exes[1] + exes[2]} zadań</font>
			</span>
		</div>
	)
}

const Title_lf = ({kurs}) => {
	return (
		<section>
			<h1 className='inside_title'>{kurs}</h1>
		</section>
	)
}

export default App
