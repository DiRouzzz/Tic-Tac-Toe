import styles from './information.module.css';

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
