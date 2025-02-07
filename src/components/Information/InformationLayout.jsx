import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ statusGame, currentPlayer }) => {
	return (
		<>
			<div className={styles.status}>
				<div>
					Ход: <span>{currentPlayer}</span>
				</div>
				<div>
					Статус: <span>{statusGame}</span>
				</div>
			</div>
		</>
	);
};

InformationLayout.propTypes = {
	statusGame: PropTypes.string.isRequired,
	currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
};
