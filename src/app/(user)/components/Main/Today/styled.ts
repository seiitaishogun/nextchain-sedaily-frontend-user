import styled from 'styled-components';

const TodayListLayout = styled.div`
  margin-top: 15px;
  padding: 0 15px;
  background: #636057;
`;

const TodayListItem = styled.div`
  overflow: hidden;
  margin-top: 15px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.white};

  &:first-child {
    margin-top: 0;
  }

  a {
    display: flex;
    flex-direction: row;
  }
`;

const TodayListThumbnail = styled.div`
  position: relative;
  width: 111px;
  height: 82px;

  img {
    position: relative !important;
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: top;
  }
`;

const TodayListInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px 0 15px 12px;
`;

const TodayContentSummary = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #a0a0a0;
`;

const TodayContentName = styled.h5`
  display: flex;
  align-items: center;
  margin-top: 3px;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
  line-height: 27px;

  &:after {
    content: '';
    display: inline-block;
    overflow: hidden;
    width: 9px;
    height: 16px;
    margin-left: 8px;
    background: url(${props =>
        `${props.theme.imageUrl}/common/arrow_right.webp`})
      no-repeat center center;
    background-size: cover;
    text-indent: -9999px;
  }
`;

export {
  TodayListLayout,
  TodayListItem,
  TodayListThumbnail,
  TodayListInfo,
  TodayContentSummary,
  TodayContentName,
};
