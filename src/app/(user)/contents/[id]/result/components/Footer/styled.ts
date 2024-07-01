import styled, { css } from 'styled-components';

const ContentFooterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 14px;
  background: ${props => props.theme.colors.white};
`;

const ContentFooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${props => props.theme.maxDeviceWidth};
  min-width: ${props => props.theme.minDeviceWidth};
`;

const LikeButton = styled.button<{ $isLike: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  width: 55px;
  height: 55px;
  padding: 0;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background: url(${props =>
      `${props.theme.imageUrl}/common/like_off_icon.svg`})
    no-repeat center center #f8f8f8;
  background-size: 30px 30px;
  text-indent: -9999px;

  ${props =>
    props.$isLike &&
    css`
      background-image: url(${`${props.theme.imageUrl}/common/like_on_icon.svg`});
      background-size: 25px 25px;
    `};
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: calc(100% - 65px);
  height: 55px;
  border-radius: 5px;
  background: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fontFamilies.inner};
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
`;

export { ContentFooterLayout, ContentFooterBox, LikeButton, ShareButton };
