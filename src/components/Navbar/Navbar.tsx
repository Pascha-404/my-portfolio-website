import Image from 'next/image';
import Logo from '../../../public/personal-logo.svg';

import LanguageButton from '../LanguageButton';

import styles from './Navbar.module.scss';

function Navbar(): JSX.Element {
	return (
		<nav className={styles.navbar}>
			<div>
				<Image
					src={Logo}
					width={200}
					height={37}
					alt='Patrick Pavliuchik typed in code syntax'
					priority
				/>
			</div>
			<div className={styles.navbarLinks}>
				<LanguageButton currentLanguage='eng' />
				<a href=''>about</a>
				<a href=''>projects</a>
				<a href=''>contacts</a>
			</div>
		</nav>
	);
}

export default Navbar;
