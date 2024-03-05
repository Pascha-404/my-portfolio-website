import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';

function SectionTransition({ children }: { children: React.ReactNode }) {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true, margin: '100px 0px 0px 0px' }}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

export default SectionTransition;
