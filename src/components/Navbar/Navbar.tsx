import Image from 'next/image';
import Logo from '../../../public/personal-logo.svg';

import LanguageButton from '../LanguageButton';
import NavigationButton from '../NavigationButton';

import styles from './Navbar.module.scss';

function Navbar(): JSX.Element {
	return (
		<nav id='navbar' className={styles.navbar}>
			<div>
				<a href="/">
					<Image
						src={Logo}
						width={200}
						height={37}
						alt='Patrick Pavliuchik typed in code syntax'
						priority
					/>
				</a>
			</div>
			<div className={styles.navbarLinks}>
				<LanguageButton currentLanguage='eng' />
				<NavigationButton text='about' style='normal' targetId='aboutSection' />
				<NavigationButton text='projects' style='normal' targetId='projectsSection' />
				<NavigationButton text='contact' style='normal' targetId='contactSection' />
				<NavigationButton text="Let's talk?" style='button' targetId='contactSection'/>
			</div>
		</nav>
	);
}

export default Navbar;
