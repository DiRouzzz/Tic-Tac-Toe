import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

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
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setStatusGame,
}) => {
	const checkWin = field => {
		return WIN_PATTERNS.some(pattern => {
			const [a, b, c] = pattern;
			return field[a] && field[a] === field[b] && field[a] === field[c];
		});
	};

	const isDrawStatus = field => {
		return field.every(cell => cell !== '') && !checkWin(field);
	};

	const onClickCell = indexCell => {
		if (isGameEnded) {
			return;
		}

		if (field[indexCell] === '') {
			const newField = [...field];
			newField[indexCell] = currentPlayer;
			setField(newField);

			if (checkWin(newField)) {
				setStatusGame(`Победил игрок: ${currentPlayer}`);
				setIsGameEnded(true);
			} else if (isDrawStatus(newField)) {
				setStatusGame('Ничья!');
				setIsGameEnded(true);
			} else {
				setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
			}
		}
	};

	return <FieldLayout field={field} onClickCell={onClickCell} />;
};

FieldContainer.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	setField: PropTypes.func.isRequired,
	currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setStatusGame: PropTypes.func.isRequired,
};
