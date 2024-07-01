import styled from 'styled-components';

const UserInfoLayout = styled.div`
  margin-top: 15px;
`;

const UserInfoItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  margin-top: 12px;
  padding: 12px 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  color: ${props => props.theme.colors.placeholder};
  background: #f8f8f8;

  &:first-child {
    margin-top: 0;
  }
`;

const SajuInfoButton = styled.button`
  margin-left: 5px;
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  line-height: 27px;
`;

const PreviewSajuSectionLayout = styled.div`
  box-sizing: border-box;
  margin-top: 30px;
  padding: 12px 15px;
  background: #f8f8f8;
`;

const SajuSectionLayout = styled.div`
  box-sizing: border-box;
  margin-top: 18px;
  padding: 12px 15px;
  background: #f8f8f8;
`;

const GridHeaderBox = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  place-items: center;
  padding: 6px 0;
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
  color: #a0a0a0;
`;

const GridHeaderBgBox = styled(GridHeaderBox)`
  height: 35px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);
  font-size: 17px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

const GridBox = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  grid-gap: 5px;
  place-items: center;
  margin-top: 8px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  span {
    text-align: center;
  }

  span:first-child {
    font-size: 21px;
    line-height: 29px;
    color: ${props => props.theme.colors.black};
  }

  span:last-child {
    font-size: 15px;
    line-height: 17px;
    color: ${props => props.theme.colors.black};
  }
`;

const GridBgItem = styled.div<{ $color: { text: string; bg: string } }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 130px;
  height: 80px;
  border-radius: 10px;
  background-color: ${props => props.$color?.bg};
  color: ${props => props.$color?.text};

  //@media (max-width: 320px) {
  //  width: 45px;
  //  height: 45px;
  //  border-radius: 10px;
  //}

  span:first-child {
    font-size: 30px;
    font-weight: bold;
    line-height: 30px;

    //@media (max-width: 320px) {
    //  font-size: 20px;
    //  line-height: 29px;
    //}
  }

  span:last-child {
    margin-top: 2px;
    font-size: 16px;
    line-height: 20px;

    //@media (max-width: 320px) {
    //  font-size: 12px;
    //  line-height: 14px;
    //}
  }
`;
const MessageBox = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  padding: 25px 15px;
  border: solid 1px #e5e5e5;
  border-radius: 6px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.16);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: ${props => props.theme.colors.black};

  strong {
    margin-bottom: 30px;
  }
`;

const DaeunSection = styled.section`
  margin-top: 25px;
  padding-bottom: 50px;

  .daeun-title {
    margin-bottom: 8px;
  }
`;

export {
  UserInfoLayout,
  UserInfoItem,
  SajuInfoButton,
  SajuSectionLayout,
  DaeunSection,
  PreviewSajuSectionLayout,
  MessageBox,
  GridHeaderBox,
  GridHeaderBgBox,
  GridBox,
  GridItem,
  GridBgItem,
};
