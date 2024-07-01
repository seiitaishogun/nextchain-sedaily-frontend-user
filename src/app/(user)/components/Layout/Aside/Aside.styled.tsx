import styled from 'styled-components';

const Layout = styled.aside`
  box-sizing: border-box;
  width: 310px;
  height: calc(100vh - 58px);
  padding-top: 15px;
  background: ${props => props.theme.colors.white};
`;

const MenuList = styled.ul`
  li {
    border-top: 1px solid ${props => props.theme.colors.gray100};

    a,
    button {
      display: block;
      overflow: hidden;
      box-sizing: border-box;
      width: 100%;
      padding: 12px 20px;
      font-size: 16px;
      font-weight: bold;
      color: ${props => props.theme.colors.black100};
      line-height: 19px;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
  }
`;

const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  display: block;
  margin: 0 16px 15px auto;
  border: none;
  background: url(${props => `${props.theme.imageUrl}/common/close.svg`})
    no-repeat center center;
  background-size: 16px;
  appearance: none;
  cursor: pointer;
`;

export { MenuList, Layout, CloseButton };
