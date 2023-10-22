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

type TechIconProp = {
	technology: TechType;
};

function TechIcon({ technology }: TechIconProp): JSX.Element {
	switch (technology) {
		case 'React':
			return <Image src={iconReact} alt='React icon' />;
		case 'Next.js':
			return <Image src={iconNextjs} alt='Nextjs icon' />;
		case 'Express.js':
			return <Image src={iconExpress} alt='Express.js icon' />;
		case 'Node.js':
			return <Image src={iconNode} alt='Node.js icon' />;
		case 'JavaScript':
			return <Image src={iconJs} alt='JavaScript icon' />;
		case 'SASS':
			return <Image src={iconSass} alt='SASS icon' />;
		case 'HTML':
			return <Image src={iconHtml} alt='HTML icon' />;
		case 'CSS':
			return <Image src={iconCss} alt='CSS icon' />;
		case 'AWS':
			return <Image src={iconAws} alt='AWS icon' />;
		case 'MongoDB':
			return <Image src={iconMongodb} alt='MongoDB icon' />;
		case 'Cloudinary':
			return <Image src={iconCloudinary} alt='Cloudinary icon' />;

		default:
			throw new Error(`No Case found for provided property: ${technology}`);
	}
}

export default TechIcon;
