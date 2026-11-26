import { useState } from "react"

const exes = [10, 7, 14]
let party = [];

function App() {
	console.log("[]: Uzytkownik weszedl na strone!");
	setTimeout(() => {console.log("[]: Minelo 10 sek. od wejscia na strone")}, 10000);
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
	const part3_new = {part: "Part 3", level: 2}

	party[0] = {part: part1, level: 0};
	party.push({part: part2, level: 1});
	party.push(part3_new);

	var partylog = party.concat();
	partylog.forEach((val) => {val['part'] += "-to jest czesc"});
	console.log(partylog);

	return (
		<div>
			<Title_lf kurs={kurs} />
			<div className='zawartosc_class'>
				<Level_lf getlevel={0} getpart={party[0]["part"]} /> {/* getpart to zmienna part elementu 0*/}
				<Level_lf getlevel={party[1].level} getpart={party[1]['part']} />
				<Level_lf getlevel={2} getpart={part3} />
			</div>
		</div>
	)
}

function Sum_lf()
{
	console.log("liczba zadań to suma: " + exes);
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
			<p/>
			<div id="KlIKEr">
				<KliKERF />
			</div>
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

let KliKERF = () => {
	let [counter_fajny , counter_fajnyF] = useState(0);

	return (
		<>
			klIkNIĘto {counter_fajny}
			<button onClick={() => {
				counter_fajnyF(++counter_fajny);
				console.log("[App::Counter]: Fajny counter wynosi teraz " + counter_fajny);
			}}>KLikNij aBy DodaĆ</button>
		</>
	)
}

export default App
