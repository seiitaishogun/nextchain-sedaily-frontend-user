import styled from 'styled-components';

const Layout = styled.div`
  width: 215px;
  height: auto;
  //height: 193px;
  top: 50%;
  left: 50%;
  margin: -98px 0 0 -105px;
  position: fixed;
  background: #fff;
  z-index: 9999;
`;

const ShareCloseButton = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  cursor: pointer;
  right: 0;
  top: 0;
  display: block;
  text-indent: -1000em;
  background: url(${props => `${props.theme.imageUrl}/common/ico_pop_x.svg`})
    no-repeat 50% 50%;
  background-size: 14px;
`;

const ShareContainer = styled.div`
  padding: 25px 30px 30px 30px;
`;

const ShareTitle = styled.h2`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 15px;
  line-height: 1.35em;
`;

const ShareSocialItem = styled.button`
  overflow: hidden;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-size: cover;
  text-indent: -9999px;
  cursor: pointer;

  &.btn_kakao {
    background: #feda00
      url(${props => `${props.theme.imageUrl}/common/ico_kakao.svg`}) no-repeat
      50% 50%;
    background-size: 26px;
  }

  &.btn_url {
    background: #e01f26
      url(${props => `${props.theme.imageUrl}/common/ico_url.png`}) no-repeat
      50% 50%;
    background-size: 23px;
  }
`;

const ShareSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100px;
  margin: 0 auto;
`;

export {
  Layout,
  ShareCloseButton,
  ShareContainer,
  ShareTitle,
  ShareSocial,
  ShareSocialItem,
};
