import React, { useState } from 'react';
import Image from 'next/legacy/image';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuid } from 'uuid';
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

	const animationVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.3 } },
		exit: { opacity: 0, transition: { duration: 0.3 } },
	};

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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
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
					<AnimatePresence mode='wait'>
						{isHovering && (
							<motion.div
								key={`techIcon-${uuid()}`}
								className={styles.iconTooltip}
								onClick={handleCloseClick}
								variants={animationVariants}
								initial='hidden'
								animate='visible'
								exit='exit'>
								{technology}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			);

		default:
			throw new Error(`No Case found for provided property: ${technology}`);
	}
}

export default TechIcon;
