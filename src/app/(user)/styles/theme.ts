const fontFamilies = {
  default: `"Noto Sans KR New", Arial, sans-serif`,
};

const colors = {
  primary: '#e01f27',
  black: '#000000',
  black100: '#121212',
  white: '#ffffff',
  gray100: '#e4e4e4',
  gray200: '#eef1f4',
  gray500: '#545F71',
  placeholder: '#a0a0a0',
  borderGray: '#ededed',
  sajuGray: '#e7e7e7',
};

const minDeviceWidth = '280px';
const maxDeviceWidth = '640px';

const theme: any = {
  fontFamilies,
  colors,
  minDeviceWidth,
  maxDeviceWidth,
  imageUrl: process.env.APP_IMAGE_URL,
};
export default theme;
