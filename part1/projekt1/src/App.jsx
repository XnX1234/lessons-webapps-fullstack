export default function App()
{
	return (
		<div className="">
			<span>
				<h1>Witaj w Projekcie1!</h1>
			</span>
			<div>
				<span>
					<p>
						<ButtonToMyGitHub/>
					</p>
				</span>
			</div>
		</div>
	)
}

function ButtonToMyGitHub()
{
	return (
		<a href="https://github.com/XnX1234/" target="_blank">
			<button>GitHub</button>
		</a>
	)
}