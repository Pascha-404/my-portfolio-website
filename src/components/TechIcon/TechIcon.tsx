import Image from 'next/image';
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
} from '../../../public/icons';
import { TechType } from '@/ts/types';

import styles from './TechIcon.module.scss';

type TechIconProp = {
	technology: TechType;
};

function TechIcon({ technology }: TechIconProp): JSX.Element {
	switch (technology) {
		case 'React':
			return <Image className={styles.techIcon} src={iconReact} alt='React icon' />;
		case 'Next.js':
			return <Image className={styles.techIcon} src={iconNextjs} alt='Nextjs icon' />;
		case 'Express.js':
			return (
				<Image className={styles.techIcon} src={iconExpress} alt='Express.js icon' />
			);
		case 'Node.js':
			return <Image className={styles.techIcon} src={iconNode} alt='Node.js icon' />;
		case 'JavaScript':
			return <Image className={styles.techIcon} src={iconJs} alt='JavaScript icon' />;
		case 'SASS':
			return <Image className={styles.techIcon} src={iconSass} alt='SASS icon' />;
		case 'HTML':
			return <Image className={styles.techIcon} src={iconHtml} alt='HTML icon' />;
		case 'CSS':
			return <Image className={styles.techIcon} src={iconCss} alt='CSS icon' />;
		case 'AWS':
			return <Image className={styles.techIcon} src={iconAws} alt='AWS icon' />;
		case 'MongoDB':
			return <Image className={styles.techIcon} src={iconMongodb} alt='MongoDB icon' />;
		case 'Cloudinary':
			return (
				<Image className={styles.techIcon} src={iconCloudinary} alt='Cloudinary icon' />
			);

		default:
			throw new Error(`No Case found for provided property: ${technology}`);
	}
}

export default TechIcon;
