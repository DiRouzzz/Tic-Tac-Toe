import { useState } from 'react';
import { GameLayout } from './GameLayout';

export const GameContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const [statusGame, setStatusGame] = useState('');

	// const isDrawStatus = isDraw ? 'Ничья' : '';
	// const isWinsStatus = isDraw === false && isGameEnded === true ? `Победа: ${currentPlayer}` : '';
	// const isWalkStatus = isDraw === false && isGameEnded === false ? `Ходит: ${currentPlayer}` : '';

	// if (isDraw) {
	// 	setStatusGame('Ничья');
	// }

	const onClickResetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
		setStatusGame('');
	}

	return (
		<GameLayout
			field={field}
			statusGame={statusGame}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			setField={setField}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			setStatusGame={setStatusGame}
			onClickResetGame={onClickResetGame}
		/>
	);
};
