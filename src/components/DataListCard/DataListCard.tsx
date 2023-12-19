import { v4 as uuid } from 'uuid';

import styles from './DataListCard.module.scss';

interface Data {
	header?: string;
	data: string;
}

interface DataListCardProps {
	type: 'home_experience' | 'home_skill' | 'project_bulletList' | 'project_highlightList';
	header: string;
	role?: string;
	timeRange?: string;
	data: Data[];
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
							<li key={`dataListCard-li-${uuid()}`} className={styles.cardListItem}>
								{item.data}
							</li>
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
							<li key={`dataListCard-li-${uuid()}`} className={styles.cardListItem}>
								{item.data}
							</li>
						))}
					</ul>
				</div>
			);
		case 'project_bulletList':
			return (
				<div className={styles.dataListCard}>
					<h2 className={styles.cardHeader}>{header}</h2>

					<ul className={styles.cardList}>
						{data.map(item => (
							<li key={`dataListCard-li-${uuid()}`} className={styles.cardListItem}>
								{item.data}
							</li>
						))}
					</ul>
				</div>
			);
		case 'project_highlightList':
			return (
				<div className={styles.dataListCard}>
					<h2 className={styles.cardHeader}>{header}</h2>

					{data.map(item => (
						<p key={`dataListCard-li-${uuid()}`} className={styles.cardListItem}>
							<span className={styles.colorHighlight}>{item.header + ':'}</span>{' '}
							{item.data}
						</p>
					))}
				</div>
			);
		default:
			throw new Error(`Wrong type provided: ${type}`);
	}
}

export default DataListCard;
