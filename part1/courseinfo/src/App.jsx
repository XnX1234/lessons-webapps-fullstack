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
				<Level_lf getlevel={0} getpart={part1} />
				<Level_lf getlevel={1} getpart={part2} />
				<Level_lf getlevel={2} getpart={part3} />
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

function Level_lf({getlevel, getpart})
{
	let ReadFrom;
	if(getlevel === 0)
	{
		ReadFrom = Level_0_lf;
	}
	else if(getlevel === 1)
	{
		ReadFrom = Level_1_lf;
	}
	else if(getlevel === 2)
	{
		ReadFrom = Level_2_lf;
	}
	else
	{
		return (
			<h3 style={{ color: "red", fontWeight: "bold" }}>
				Undefined!!! ---&gt; &#91; Nie ma takiej części &#93;
			</h3>
		)
	}
	
	return (
		<span>
			<h1 className='h1_part'>{getpart}</h1>
			<font>Liczba zadań: {exes[getlevel]}</font>
			<div>
				<ReadFrom />
			</div>
		</span>
	)
}

const Level_0_lf = () => {
	return (
		<>
		</>
	)
}
const Level_1_lf = () => {
	return (
		<>
		</>
	)
}
const Level_2_lf = () => {
	return (
		<>
		</>
	)
}

export default App
