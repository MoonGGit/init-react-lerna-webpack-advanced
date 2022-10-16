import { css, Global } from '@emotion/react';
import { typography } from '.';

export const GlobalStyle = () => {
	return (
		<Global
			styles={[
				typography.fontFaceStyle,
				css`
					html,
					body {
						margin: 0;
						padding: 0;
						font-family: ${typography.FONT_FAMILY.join(', ')};
					}
				`,
			]}
		></Global>
	);
};
