'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

function PageTransition({ children }: { children: React.ReactNode }) {
	const path = usePathname();

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={path}
				initial={{ opacity: 0, y: 200 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -200 }}
				transition={{ duration: 0.5 }}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

export default PageTransition;
