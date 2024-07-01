import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';
import theme from '@/app/(user)/styles/theme';

const GlobalStyle = createGlobalStyle`
	${reset}
	${normalize}
	html,
	body {
		font-size: 14px;
		font-family: ${theme.fontFamilies.default};
		color: ${props => props.theme.colors.black};
		line-height: normal;
		-webkit-text-size-adjust: none;
		//background: #ededed;
		position: relative;
		height: 100%;
	}

	body {
		line-height: 1.45;
	}
	
	.is-stuckToBottom {
		position: fixed;
		bottom: 20px; // A sensible offset from the edge of the viewport
	}
	
	#main {
		overflow: auto;
	}

	#layout {
		width: 100%;
		max-width: 100%;
		min-width: ${props => props.theme.minDeviceWidth};
		margin: 0 auto;
		// padding-top: 80px;
		background: #ededed;
	}

	img {
		display: block;
		max-width: 100%;
		vertical-align: top;
	}

	a {
		display: block;
		color: ${props => props.theme.colors.black100};
		text-decoration: none;
		cursor: pointer;
	}

	span {
		word-break: keep-all;
	}

	em {
		font-style: italic;
	}

	table tr td,
	table tr th {
		vertical-align: middle;
	}

	button {
		padding: 0;
		border: 0;
		background: transparent;
		cursor: pointer;
	}

	fieldset {
		padding: 0;
	}

	.react-datepicker-popper {
		z-index: 99 !important;
	}

	@font-face {
		font-family: "Noto Sans KR New";
		font-style: normal;
		font-weight: 700;
		src: url("https://img.sedaily.com/Html/font/NotoSansKR-Bold.eot");
		src: url("https://img.sedaily.com/Html/font/NotoSansKR-Bold.eot?#iefix") format("embedded-opentype"),
		url("https://img.sedaily.com/Html/font/NotoSansKR-Bold.woff2") format("woff2"),
		url("https://img.sedaily.com/Html/font/NotoSansKR-Bold.woff") format("woff"),
		url("https://img.sedaily.com/Html/font/NotoSansKR-Bold.otf") format("opentype");
	}

	@font-face {
		font-family: "Noto Sans KR New";
		font-style: normal;
		font-weight: 300;
		src: url("https://img.sedaily.com/Html/font/NotoSansKR-Light.eot");
		src: url("https://img.sedaily.com/Html/font/NotoSansKR-Light.eot?#iefix") format("embedded-opentype"),
		url("https://img.sedaily.com/Html/font/NotoSansKR-Light.woff2") format("woff2"),
		url("https://img.sedaily.com/Html/font/NotoSansKR-Light.woff") format("woff"),
		url("https://img.sedaily.com/Html/font/NotoSansKR-Light.otf") format("opentype");
	}

	@font-face {
		font-family: "Noto Sans KR New";
		font-style: normal;
		font-weight: 500;
		src: url("https://img.sedaily.com/Html/font/NotoSansKR-Medium.eot");
		src: url("https://img.sedaily.com/Html/font/NotoSansKR-Medium.eot?#iefix") format("embedded-opentype"),
		url("https://img.sedaily.com/Html/font/NotoSansKR-Medium.woff2") format("woff2"),
		url("https://img.sedaily.com/Html/font/NotoSansKR-Medium.woff") format("woff"),
		url("https://img.sedaily.com/Html/font/NotoSansKR-Medium.otf") format("opentype");
	}

	@font-face {
		font-family: "Noto Sans KR New";
		font-style: normal;
		font-weight: 400;
		src: url("https://img.sedaily.com/Html/font/NotoSansKR-Regular.eot");
		src: url("https://img.sedaily.com/Html/font/NotoSansKR-Regular.eot?#iefix") format("embedded-opentype"),
		url("https://img.sedaily.com/Html/font/NotoSansKR-Regular.woff2") format("woff2"),
		url("https://img.sedaily.com/Html/font/NotoSansKR-Regular.woff") format("woff"),
		url("https://img.sedaily.com/Html/font/NotoSansKR-Regular.otf") format("opentype");
	}
`;

export default GlobalStyle;
