import styles from './field.module.css';

export const FieldLayout = ({ field, onClickCell }) => {
	const fieldMapping = field.map((item, index) => {
		return (
			<div
				className={styles.cell}
				onClick={() => onClickCell(index)}
				data-value={item}
				data-index={index}
				key={index}>
				{item}
			</div>
		);
	});

	return (
		<>
			<div className={styles.board}>{fieldMapping}</div>
		</>
	);
};
