import styles from './game.module.css';
import { InformationContainer } from '../Information/InformationContainer';
import { FieldContainer } from '../Field/FieldContainer';

export const GameLayout = ({field, isDrawStatus}) => {
	
	return (
		<>
			<div className={styles.gameContainer}>
				<h1>Крестики-нолики</h1>
				<InformationContainer isDrawStatus={isDrawStatus}/>
				<FieldContainer field={field} />
				<button id='reset'>🔄 Начать заново</button>
			</div>
			<div className={styles.modal}>
				<div className={styles.modalContent}>
					<h2>Статус: {isDrawStatus}</h2>
					<button>OK</button>
				</div>
			</div>
		</>
	);
};
