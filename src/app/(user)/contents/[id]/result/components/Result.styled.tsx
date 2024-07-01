import styled, { css } from 'styled-components';

const PaddingBox = styled.div`
  padding: 0 15px;
`;

const ResultLayout = styled.section``;

const DataLayout = styled.div`
  margin-top: 15px;

  &:first-child {
    margin-top: 0;
  }

  > div {
    margin-top: 30px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

const ChildLayout = styled.div<{ sign?: string | null }>`
  margin-top: 30px;

  &:first-child {
    margin-top: 0;
  }

  > h4 {
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    color: ${props => props.theme.colors.primary};
    text-align: center;

    ${props =>
      props.sign &&
      css`
        padding-top: 48px;
        background: url('${props.theme
            .imageUrl}/content/icon/${props.sign}.png')
          no-repeat center top;
        background-size: 40px 40px;
      `}
  }

  p {
    font-size: 18px;
    font-weight: normal;
    line-height: normal;
    word-break: normal;
  }
`;

const ContentLayout = styled.section`
  display: block;
  box-sizing: border-box;
  margin-top: 12px;
  padding: 25px 15px;
  border-radius: 6px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.16);
  font-size: 18px;
  font-weight: normal;
  line-height: normal;
  color: ${props => props.theme.colors.black};
  text-align: left;
  word-break: break-all;

  > h3 {
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    color: #000000;
    text-align: center;
  }
`;

const ContentBox = styled.article`
  padding: 0 0 10px;
  background: #ffffff;
`;

export {
  PaddingBox,
  ResultLayout,
  DataLayout,
  ChildLayout,
  ContentLayout,
  ContentBox,
};
