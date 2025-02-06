import styles from './field.module.css';

export const FieldLayout = ({ field }) => {
	const fieldMapping = field.map((item, dataIndex) => {
		return (
			<div className={styles.cell} data-index={dataIndex} key={dataIndex}>
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
