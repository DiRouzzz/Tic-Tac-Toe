import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';

export const InformationContainer = ({ statusGame, currentPlayer }) => {
	return (
		<InformationLayout statusGame={statusGame} currentPlayer={currentPlayer} />
	);
};

InformationContainer.propTypes = {
	statusGame: PropTypes.string.isRequired,
	currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
};
