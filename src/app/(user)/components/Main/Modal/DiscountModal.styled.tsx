import styled from 'styled-components';

const Layout = styled.div`
  width: 500px;
  box-sizing: border-box;
  outline: 0;
  div {
    box-sizing: border-box;
  }
  @media (max-width: 480px) {
    width: 350px;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 28px;
  background: #ffffff;
  border-radius: 28px;
  img {
    position: relative !important;
    border-top-right-radius: 28px;
    border-top-left-radius: 28px;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    height: 315px;
  }
`;

const OptionButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 28px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  font-family: ${({ theme }) => theme.fontFamilies.notoSans};
  color: ${props => props.theme.colors.white};
  text-align: center;
  margin-bottom: 13px;
  @media (max-width: 480px) {
    padding: 0px 2px;
  }
`;

const HideOneDay = styled.div`
  cursor: pointer;
`;

const BottomRow = styled.div`
  background: #ffffff;
  border-bottom-right-radius: 28px;
  border-bottom-left-radius: 28px;
  height: 35px;
  border-top: 1px solid #00000066;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  font-family: ${({ theme }) => theme.fontFamilies.notoSans};
  color: #00000066;
  text-align: center;
  cursor: pointer;
`;

export { Layout, ModalContent, OptionButton, HideOneDay, BottomRow };
