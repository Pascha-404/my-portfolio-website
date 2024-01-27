import Image from 'next/legacy/image';
import {
	iconReact,
	iconAws,
	iconCloudinary,
	iconCss,
	iconExpress,
	iconHtml,
	iconJs,
	iconMongodb,
	iconNextjs,
	iconNode,
	iconSass,
	iconMui,
	iconFirebase,
} from '../../../public/icons';
import { TechType } from '@/ts/types';

import styles from './TechIcon.module.scss';

type TechIconProp = {
	technology: TechType;
};

function TechIcon({ technology }: TechIconProp): JSX.Element {
	const iconWidth = '31';
	const iconHeight = '33';
	switch (technology) {
		case 'React':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconReact}
					alt='React icon'
				/>
			);
		case 'Next.js':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconNextjs}
					alt='Nextjs icon'
				/>
			);
		case 'Express.js':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconExpress}
					alt='Express.js icon'
				/>
			);
		case 'Node.js':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconNode}
					alt='Node.js icon'
				/>
			);
		case 'JavaScript':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconJs}
					alt='JavaScript icon'
				/>
			);
		case 'SASS':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconSass}
					alt='SASS icon'
				/>
			);
		case 'HTML':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconHtml}
					alt='HTML icon'
				/>
			);
		case 'CSS':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconCss}
					alt='CSS icon'
				/>
			);
		case 'AWS':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconAws}
					alt='AWS icon'
				/>
			);
		case 'MongoDB':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconMongodb}
					alt='MongoDB icon'
				/>
			);
		case 'Cloudinary':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconCloudinary}
					alt='Cloudinary icon'
				/>
			);
		case 'Material UI':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconMui}
					alt='Material UI icon'
				/>
			);
		case 'Firebase':
			return (
				<Image
					width={iconWidth}
					height={iconHeight}
					className={styles.techIcon}
					src={iconFirebase}
					alt='Firebase icon'
				/>
			);

		default:
			throw new Error(`No Case found for provided property: ${technology}`);
	}
}

export default TechIcon;
