'use client';
import React from 'react';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import defaultImg from '../../../public/projectCard-default-img.jpeg';
import { TechType } from '@/ts/types';

import NavigationButton from '../NavigationButton';
import Image from 'next/legacy/image';
import TechIcon from '../TechIcon';

import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
	readonly id: string;
	imgSrc?: string | null;
	name: string;
	role: string;
	stack: TechType[];
	task: string;
	description: string;
	githubLink: string;
	liveLink?: string;
}

function ProjectCard(props: ProjectCardProps): JSX.Element {
	const img = props.imgSrc || defaultImg;
	const { id, role, task, stack, name, description, liveLink, githubLink } = props;

	return (
		<article className={styles.projectCard}>
			<div className={styles.cardFirstHalf}>
				{/* Display on screens under 992px width */}
				<div className={styles.displaySmallScreen}>
					<div className={styles.imgWrapper}>
						<Link href={`/project/${id}`}>
							<Image
								src={img}
								width='800'
								height='400'
								objectFit='cover'
								alt='Project Preview'
							/>
						</Link>
					</div>
					<Link href={`/project/${id}`} className={styles.showPhone}>
						<h4>project: {name}</h4>
					</Link>
					<div className={styles.cardLive}>
						<div className={styles.techLogos}>
							{stack.map(tech => (
								<TechIcon key={`techIcon-${uuid()}`} technology={tech} />
							))}
						</div>
						{liveLink && (
							<NavigationButton
								href={liveLink}
								style='uppercaseFatBlue'
								text='visit live product'
							/>
						)}
					</div>
					<div className={styles.cardDetails}>
						<p className={styles.weightHighlight}>Role:</p>
						<p>{role}</p>
						<p className={styles.weightHighlight}>Tasks:</p>
						<p>{task}</p>
						<p className={styles.weightHighlight}>Stack:</p>
						<p>{stack.join(', ')}</p>
					</div>
				</div>

				{/* Display on screens above 992px width */}
				<div className={styles.displayBigScreen}>
					<div className={styles.imgWrapper}>
						<Link href={`/project/${id}`}>
							<Image
								src={img}
								width='455'
								height='172'
								objectFit='cover'
								alt='Project Preview'
							/>
						</Link>
					</div>
					<div className={styles.cardDetails}>
						<p className={styles.weightHighlight}>Role:</p>
						<p>{role}</p>
						<p className={styles.weightHighlight}>Tasks:</p>
						<p>{task}</p>
						<p className={styles.weightHighlight}>Stack:</p>
						<p>{stack.join(', ')}</p>
					</div>
				</div>
			</div>

			{/* Display on screens above 992px width */}
			<div className={`${styles.cardLive} ${styles.displayBigScreen}`}>
				<div className={styles.techLogos}>
					{stack.map(tech => (
						<TechIcon key={`techIcon-${uuid()}`} technology={tech} />
					))}
				</div>
				{liveLink && (
					<NavigationButton
						href={liveLink}
						style='uppercaseFatBlue'
						text='visit live product'
					/>
				)}
			</div>

			{/* Displays on all screen sizes */}
			<div className={styles.cardSecondHalf}>
				<Link href={`/project/${id}`} className={styles.hidePhone}>
					<h4>project: {name}</h4>
				</Link>
				<p>{description}</p>
				<NavigationButton href={githubLink} style='uppercaseBlue' text='[github link]' />
			</div>
		</article>
	);
}

export default ProjectCard;
