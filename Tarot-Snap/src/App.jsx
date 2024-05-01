import { useState } from 'react';
import './App.css';
import cardData from '../../tarot-images.json';
import Instructions from './Components/Instructions';
import Board from './Components/Board';
import Score from './Components/Score';

function App() {
	const [displayInstructions, setDisplayInstructions] = useState(true);
	const [numberOfPlayers, setNumberOfPlayers] = useState(2);

  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

	return (
		<main>
			{displayInstructions && (
				<Instructions setDisplayInstructions={setDisplayInstructions} />
			)}
			<Board cardData={cardData.cards}/>
			<Score playerNumber={1} score={playerOneScore}/>
			{numberOfPlayers === 2 && <Score playerNumber={2} score={playerTwoScore}/>}
		</main>
	);
}

export default App;
