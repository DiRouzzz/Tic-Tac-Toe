import { FieldLayout } from './FieldLayout';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const FieldContainer = ({
	field,
	currentPlayer,
	setCurrentPlayer,
	setField,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
	statusGame,
	setStatusGame,
}) => {
	// WIN_PATTERNS.forEach(patterns => {
	// 	const [a, b, c] = patterns;
	// 	if (field[a] && field[b] && field[c] === currentPlayer) {
	// 		console.log(`wins ${currentPlayer}`);
	// 		setIsGameEnded(true);
	// 	} else {
	// 		// setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	// 	}
	// });
	// const onClickCell = indexCell => {
	// 	// if(isGameEnded){
	// 	// 	return;
	// 	// }
	// 	if (field[indexCell] === '') {
	// 		console.log('Зашел');

	// 		setField(prevField => {
	// 			const newField = [...prevField];
	// 			newField[indexCell] = currentPlayer;
	// 			return newField;
	// 		});
	// 	}
	// };

	const checkWin = field => {
		return WIN_PATTERNS.some(pattern => {
			const [a, b, c] = pattern;
			return field[a] && field[a] === field[b] && field[a] === field[c];
		});
	};

	// Функция для проверки ничьи
	const isDrawStatus = field => {
		return field.every(cell => cell !== '') && !checkWin(field);
	};

	// const isDrawStatus = field.every(cell => cell !== '') && !checkWin(field);
	// console.log('isDrawStatus', isDrawStatus);

	// if(isDrawStatus){
	// 	setIsDraw(true);
	// }

	const onClickCell = indexCell => {
		if (isGameEnded) {
			return; 
		}

		if (field[indexCell] === '') {
			const newField = [...field];
			newField[indexCell] = currentPlayer;
			setField(newField);

			// Проверяем, есть ли победитель
			if (checkWin(newField)) {
				console.log(`Победил игрок: ${currentPlayer}`);
				setStatusGame(`Победил игрок: ${currentPlayer}`);
				setIsGameEnded(true);
			} else if (isDrawStatus(newField)) {
				console.log('Ничья!');
				setStatusGame('Ничья!')
				setIsDraw(true);
				setIsGameEnded(true);
			} else {
				setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
			}
		}
	};

	return (
		<FieldLayout
			field={field}
			onClickCell={onClickCell}
		/>
	);
};
