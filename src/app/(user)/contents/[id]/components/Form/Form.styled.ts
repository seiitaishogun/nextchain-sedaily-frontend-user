import styled from 'styled-components';

const MessageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 130px;
  padding: 10px 20px;
  border-radius: 40px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 5px 30px 0 rgba(185, 169, 204, 0.3);
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  color: #b7a7ca;

  span {
    text-align: center;
  }
`;

const ButtonLayout = styled.div<{ $isValid: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  //position: fixed;
  //left: 0;
  //bottom: 0;
  //z-index: 1001;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  margin-top: 20px;
  border-top: 1px solid ${props => props.theme.colors.borderGray};
  padding-top: 20px;
  //background: rgba(255, 255, 255, 0.9);

  .button-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  button[type='button'] {
    overflow: hidden;
    box-sizing: border-box;
    width: 55px;
    height: 55px;
    border-radius: 5px;
    border: 1px solid #e8e8e8;
    background-image: url(${props =>
      `${props.theme.imageUrl}/common/like_off_icon.svg`});
    background-position: center center;
    background-color: #f8f8f8;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    text-indent: -9999px;

    &.active {
      background-size: 25px 25px;
      background-image: url(${props =>
        `${props.theme.imageUrl}/common/like_on_icon.svg`});
    }
  }

  button[type='submit'] {
    width: calc(100% - 65px);
    height: 55px;
    border-radius: 5px;
    background: ${props =>
      props.$isValid ? props.theme.colors.primary : 'rgba(155, 165, 183, 0.2)'};
    font-size: 22px;
    font-weight: bold;
    color: ${props =>
      props.$isValid
        ? props.theme.colors.white
        : props.theme.colors.placeholder};
  }
`;

const AgreementBox = styled.div`
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  max-height: calc(100vh - 100px);
  margin-top: 20px;
  padding: 10px 14px;
  border: 1px solid ${props => props.theme.colors.borderGray};
  border-radius: 6px;
  font-size: 14px;
  color: ${props => props.theme.colors.black100};
  line-height: 21px;
  text-align: left;
  word-break: break-word;

  // &::-webkit-scrollbar-track, &::-webkit-scrollbar {
  //   background: ${props => props.theme.colors.white};
  // }
  //
  // &::-webkit-scrollbar-thumb {
  //   border: 6px solid transparent;
  //   border-radius: 30px;
  //   background-color: ${props => props.theme.colors.borderGray};
  // }
`;

const AgreementCheck = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const AgreementLabelBox = styled.div`
  display: flex;
  align-items: center;
`;

const AgreementCheckLabel = styled.label`
  font-size: 15px;
  font-weight: normal;
  color: ${props => props.theme.colors.black};
  text-align: left;
  cursor: pointer;
`;

const AgreeDetailButton = styled.button`
  font-size: 14px;
  color: ${props => props.theme.colors.gray500};
  text-decoration: underline;
`;

export {
  MessageBox,
  ButtonLayout,
  AgreementBox,
  AgreementCheck,
  AgreementLabelBox,
  AgreementCheckLabel,
  AgreeDetailButton,
};
