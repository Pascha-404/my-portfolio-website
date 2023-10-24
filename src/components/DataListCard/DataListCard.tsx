import styles from './DataListCard.module.scss';

interface DataListCardProps {
	type: 'experience' | 'skill';
	header: string;
	role?: string;
	timeRange?: string;
	data: string[];
}

function DataListCard({
	type,
	header,
	role,
	timeRange,
	data,
}: DataListCardProps): JSX.Element {
	switch (type) {
		case 'experience':
			return (
				<div className={styles.dataListCard}>
					<div>
						<div>
							<h6>{header}</h6>
							<h6>{role}</h6>
						</div>
						<p>{timeRange}</p>
					</div>

					<ul className={styles.dataList}>
						{data.map(item => (
							<li className={styles.dataItem}>{item}</li>
						))}
					</ul>
				</div>
			);
		case 'skill':
			return (
				<div className={styles.dataListCard}>
					<h6>{header}</h6>

					<ul className={styles.dataList}>
						{data.map(item => (
							<li className={styles.dataItem}>{item}</li>
						))}
					</ul>
				</div>
			);
		default:
			throw new Error(`Wrong type provided: ${type}`);
	}
}

export default DataListCard;
