import { useState } from 'react';
import { GameLayout } from './GameLayout';

export const GameContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const [statusGame, setStatusGame] = useState('');

	const onClickResetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setField(['', '', '', '', '', '', '', '', '']);
		setStatusGame('');
	};

	return (
		<GameLayout
			field={field}
			setField={setField}
			statusGame={statusGame}
			setStatusGame={setStatusGame}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			onClickResetGame={onClickResetGame}
		/>
	);
};
