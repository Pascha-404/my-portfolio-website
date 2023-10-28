import styles from './DataListCard.module.scss';

interface DataListCardProps {
	type: 'home_experience' | 'home_skill' | 'project_bulletlist';
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
		case 'home_experience':
			return (
				<div className={styles.dataListCard}>
					<div className={styles.cardHeaderWrapper}>
						<div>
							<h6 className={styles.cardHeader}>{header}</h6>
							<h6 className={styles.cardRole}>{role}</h6>
						</div>
						<p className={styles.cardTimeRange}>{timeRange}</p>
					</div>

					<ul className={styles.cardList}>
						{data.map(item => (
							<li className={styles.cardListItem}>{item}</li>
						))}
					</ul>
				</div>
			);
		case 'home_skill':
			return (
				<div className={styles.dataListCard}>
					<h6 className={styles.cardHeader}>{header}</h6>

					<ul className={styles.cardList}>
						{data.map(item => (
							<li className={styles.cardListItem}>{item}</li>
						))}
					</ul>
				</div>
			);
		case 'project_bulletlist':
			return (
				<div className={styles.dataListCard}>
					<h2 className={styles.cardHeader}>{header}</h2>

					<ul className={styles.cardList}>
						{data.map(item => (
							<li className={styles.cardListItem}>{item}</li>
						))}
					</ul>
				</div>
			);
		default:
			throw new Error(`Wrong type provided: ${type}`);
	}
}

export default DataListCard;
