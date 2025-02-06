import styles from './information.module.css';

export const InformationLayout = ({ isDrawStatus }) => {
	return (
		<>
			<div className={styles.status}>
				<div>
					Ход: <span>X</span>
				</div>
				<div>
					Статус: <span>{isDrawStatus}</span>
				</div>
			</div>
		</>
	);
};
