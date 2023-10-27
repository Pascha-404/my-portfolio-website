import Image from 'next/image';
import styles from './page.module.scss';
import defaultImage from '../../../../public/projectCard-default-img.jpeg';

interface ProjectParams {
	params: { id: string };
}

function Project({ params }: ProjectParams): JSX.Element {
	return (
		<main className={styles.main}>
		</main>
	);
}

export default Project;
