import styles from './game.module.css';
import { InformationContainer } from '../Information/InformationContainer';
import { FieldContainer } from '../Field/FieldContainer';
import PropTypes from 'prop-types';

export const GameLayout = ({
	field,
	statusGame,
	setStatusGame,
	currentPlayer,
	setCurrentPlayer,
	setField,
	isGameEnded,
	setIsGameEnded,
	onClickResetGame,
}) => {
	return (
		<>
			<div className={styles.gameContainer}>
				<h1>Крестики-нолики</h1>
				<InformationContainer
					statusGame={statusGame}
					currentPlayer={currentPlayer}
				/>
				<FieldContainer
					field={field}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					setField={setField}
					isGameEnded={isGameEnded}
					setIsGameEnded={setIsGameEnded}
					setStatusGame={setStatusGame}
				/>
				<button onClick={onClickResetGame}>🔄 Начать заново</button>
			</div>
			{isGameEnded && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<h2>Статус: {statusGame}</h2>
						<button onClick={onClickResetGame}>OK</button>
					</div>
				</div>
			)}
		</>
	);
};

GameLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	statusGame: PropTypes.string.isRequired,
	currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	onClickResetGame: PropTypes.func.isRequired,
	setStatusGame: PropTypes.func.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
	setField: PropTypes.func.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
};
