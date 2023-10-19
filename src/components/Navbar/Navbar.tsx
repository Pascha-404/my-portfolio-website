import styles from './Navbar.module.scss';
import Logo from '../../../public/personal-logo.svg';
import Image from 'next/image';

function Navbar(): JSX.Element {
	return (
		<nav className={styles.navbar}>
			<div>
				<Image
					src={Logo}
					width={200}
					height={37}
					alt='Patrick Pavliuchik typed in code syntax'
				/>
			</div>
			<div></div>
		</nav>
	);
}

export default Navbar;
