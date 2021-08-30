// import React from 'react';
// import { useState } from 'react';
// import './app.scss';

// function App() {
// 	const [display, setDisplay] = useState('');
// 	const showClicked = (e) => {
// 		setDisplay(e.target.id);
// 	};
// 	const playClicked = (e) => {
// 		console.log('audio');
// 	};
// 	return (
// 		<div className="App">
// 			<div id="drum-machine">
// 				<div id="display">{display}</div>
// 				<button className="drum-pad" id="heater-1" onClick={showClicked}>
// 					Q
// 					<audio
// 						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
// 						className="clip"
// 						id="Q"
// 						onClick={playClicked}
// 					></audio>
// 				</button>
// 				<button className="drum-pad" id="heater-2" onClick={showClicked}>
// 					W
// 					<audio
// 						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
// 						className="clip"
// 						id="W"
// 					></audio>
// 				</button>
// 				<button className="drum-pad" id="heater-3" onClick={showClicked}>
// 					E
// 					<audio
// 						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
// 						className="clip"
// 						id="E"
// 					></audio>
// 				</button>
// 				<button className="drum-pad" id="heater-4" onClick={showClicked}>
// 					A
// 					<audio
// 						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
// 						className="clip"
// 						id="A"
// 					></audio>
// 				</button>
// 				<button className="drum-pad" id="Clap" onClick={showClicked}>
// 					S
// 					<audio
// 						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
// 						className="clip"
// 						id="S"
// 					></audio>
// 				</button>
// 				<button className="drum-pad" id="Open HH" onClick={showClicked}>
// 					D
// 					<audio
// 						src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
// 						className="clip"
// 						id="D"
// 					></audio>
// 				</button>
// 				<button className="drum-pad" id="Kick n' Hat" onClick={showClicked}>
// 					Z
// 					<audio
// 						src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
// 						className="clip"
// 						id="Z"
// 					></audio>
// 				</button>
// 				<button className="drum-pad" id="Kick" onClick={showClicked}>
// 					X
// 					<audio
// 						src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
// 						className="clip"
// 						id="X"
// 					></audio>
// 				</button>
// 				<button className="drum-pad" id="Closed HH" onClick={showClicked}>
// 					C
// 					<audio
// 						src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
// 						className="clip"
// 						id="C"
// 					></audio>
// 				</button>
// 			</div>
// 		</div>
// 	);
// }
