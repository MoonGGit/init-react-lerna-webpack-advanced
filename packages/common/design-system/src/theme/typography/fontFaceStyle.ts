import { css } from '@emotion/react';
import { woff2 } from './assets';

export const fontFaceStyle = css`
	@font-face {
		font-family: 'Galmuri7';
		font-display: swap;
		src: local('Galmuri7 Regular'), url('${woff2.Galmuri7}') format('woff2');
	}
`;
