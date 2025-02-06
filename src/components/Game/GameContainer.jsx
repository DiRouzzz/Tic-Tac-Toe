import { useState } from 'react';
import { GameLayout } from './GameLayout';

export const GameContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(true);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const [statusGame, setStatusGame] = useState('');

	// const isDrawStatus = isDraw ? 'Ничья' : '';
	// const isWinsStatus = isDraw === false && isGameEnded === true ? `Победа: ${currentPlayer}` : '';
	// const isWalkStatus = isDraw === false && isGameEnded === false ? `Ходит: ${currentPlayer}` : '';

	if(isDraw){
		setStatusGame('Ничья');
	} else if(isGameEnded) {
		setStatusGame(`Победа: ${currentPlayer}`);
	} else {
		setStatusGame('`Ходит: ${currentPlayer}`');
	}
	
	return <GameLayout field={field} isDrawStatus={isDrawStatus}/>;
};
