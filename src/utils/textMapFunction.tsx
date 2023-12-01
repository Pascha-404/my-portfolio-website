import React from 'react';
import { v4 as uuid } from 'uuid';

import { ITextSegment } from '@/ts/types';

// Takes an array of text objects
// [{text:{en: string, de: string}, highlight: boolean}]
// Returns pure text or text wrapped with a span if boolean is true
// Uses currentLanguage to choose the needed language key
// Span gets class added which is provided through function props

interface ITextMapFunctionProps {
	objectArray: ITextSegment[];
	currentLanguage: 'en' | 'de';
	stylingClass: string;
	styles: { [className: string]: string };
}

function textMapFunction({
	objectArray,
	currentLanguage,
	stylingClass,
	styles,
}: ITextMapFunctionProps): JSX.Element[] {
	return objectArray.map(segment => {
		const text = segment.text[currentLanguage];

		if (segment.highlight) {
			return (
				<span key={`textSegment-${uuid()}`} className={styles[stylingClass]}>
					{text}
				</span>
			);
		}
		return <React.Fragment key={`textSegment-${uuid()}`}>{text}</React.Fragment>;
	});
}
