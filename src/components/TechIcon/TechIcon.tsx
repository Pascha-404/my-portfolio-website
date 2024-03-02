import React, { useState } from 'react';
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
	const [isHovering, setIsHovering] = useState(false);
	const iconWidth = '31';
	const iconHeight = '33';

	function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>): void {
		setIsHovering(true);
	}

	function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>): void {
		setIsHovering(false);
	}

	function handleOpenClick() {
		setIsHovering(true);
	}

	function handleCloseClick() {
		setIsHovering(false);
	}

	switch (technology) {
		case 'React':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconReact}
						alt='React icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);
		case 'Next.js':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconNextjs}
						alt='Nextjs icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);
		case 'Express.js':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconExpress}
						alt='Express.js icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);
		case 'Node.js':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconNode}
						alt='Node.js icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);
		case 'JavaScript':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconJs}
						alt='JavaScript icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);
		case 'SASS':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconSass}
						alt='SASS icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);
		case 'HTML':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconHtml}
						alt='HTML icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);
		case 'CSS':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconCss}
						alt='CSS icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);
		case 'AWS':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconAws}
						alt='AWS icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);
		case 'MongoDB':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconMongodb}
						alt='MongoDB icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);
		case 'Cloudinary':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconCloudinary}
						alt='Cloudinary icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);
		case 'Material UI':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconMui}
						alt='Material UI icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);
		case 'Firebase':
			return (
				<div
					className={styles.techIcon}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Image
						onClick={handleOpenClick}
						width={iconWidth}
						height={iconHeight}
						className={styles.techIcon}
						src={iconFirebase}
						alt='Firebase icon'
					/>
					{isHovering && (
						<div className={styles.iconTooltip} onClick={handleCloseClick}>
							{technology}
						</div>
					)}
				</div>
			);

		default:
			throw new Error(`No Case found for provided property: ${technology}`);
	}
}

export default TechIcon;
