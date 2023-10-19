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
				/>
			</div>
			<div><LanguageButton currentLanguage='eng'/></div>
		</nav>
	);
}

export default Navbar;
