import React from 'react';
import { useState, useEffect } from 'react';
import './app.scss';

const audioData = [
	{
		keyCode: 81,
		keyTrigger: 'Q',
		id: 'Heater-1',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
	},
	{
		keyCode: 87,
		keyTrigger: 'W',
		id: 'Heater-2',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
	},
	{
		keyCode: 69,
		keyTrigger: 'E',
		id: 'Heater-3',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
	},
	{
		keyCode: 65,
		keyTrigger: 'A',
		id: 'Heater-4',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
	},
	{
		keyCode: 83,
		keyTrigger: 'S',
		id: 'Clap',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
	},
	{
		keyCode: 68,
		keyTrigger: 'D',
		id: 'Open-HH',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
	},
	{
		keyCode: 90,
		keyTrigger: 'Z',
		id: "Kick-n'-Hat",
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
	},
	{
		keyCode: 88,
		keyTrigger: 'X',
		id: 'Kick',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
	},
	{
		keyCode: 67,
		keyTrigger: 'C',
		id: 'Closed-HH',
		url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
	},
];

function App() {
	const [display, setDisplay] = useState('');

	return (
		<div className="App">
			<div id="drum-machine">
				<div id="display">{display}</div>
				{audioData.map((clip) => (
					<Pad key={clip.id} clip={clip} stateChanger={setDisplay} />
				))}
			</div>
		</div>
	);
}

const Pad = ({ clip, stateChanger }) => {
	const playSound = () => {
		const audioitem = document.getElementById(clip.keyTrigger);
		audioitem.currentTime = 0;
		audioitem.play();
	};

	useEffect(() => {
		document.addEventListener('keydown', keyPressHandle);
		return () => {
			document.removeEventListener('keydown', keyPressHandle);
		};
	});

	const keyPressHandle = (event) => {
		if (event.keyCode === clip.keyCode) {
			playSound();
			stateChanger(clip.id);
			console.log(event.key);
		}
	};

	return (
		<button
			onClick={() => {
				playSound();
				stateChanger(clip.id);
			}}
			id={clip.id}
			className="drum-pad"
		>
			<audio className="clip" src={clip.url} id={clip.keyTrigger} />
			{clip.keyTrigger}
		</button>
	);
};

export default App;
