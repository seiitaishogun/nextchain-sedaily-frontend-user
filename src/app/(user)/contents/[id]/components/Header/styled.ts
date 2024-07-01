import styled from 'styled-components';

const ContentHeaderLayout = styled.section`
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.borderGray};
`;

const ContentCategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentCategory = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #a0a0a0;
  line-height: 21px;
`;

const ContentName = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 58px;
  margin-top: 15px;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  text-overflow: ellipsis;
`;

const ContentCount = styled.div`
  display: flex;
  align-items: center;
`;

const ContentCountItem = styled.button`
  margin-right: 12px;
  padding-left: 20px;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 18px 18px;
  font-size: 17px;
  font-weight: normal;
  color: #a0a0a0;
  line-height: 21px;

  &:last-child {
    margin-right: 0;
  }

  &.btn-view {
    background-image: url(${props =>
      `${props.theme.imageUrl}/common/view_icon.svg`});
  }

  &.btn-like {
    background-image: url(${props =>
      `${props.theme.imageUrl}/common/like_off_icon.svg`});
    background-position: left top;

    &.active {
      background-image: url(${props =>
        `${props.theme.imageUrl}/common/like_on_icon.svg`});
    }
  }

  &.btn-share {
    background-image: url(${props =>
      `${props.theme.imageUrl}/common/share_icon.svg`});
  }
`;

const ContentVariety = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentPreviewButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: auto;
  height: 32px;
  padding: 0 5px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  background: #fafafa;
  font-size: 14px;
  font-weight: 500;
  color: #a0a0a0;
`;

const ContentBanner = styled.div`
  overflow: hidden;
  width: 100%;
  max-height: 320px;
  margin-top: 12px;

  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: fill;
  }
`;

const ContentDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 72px;
  margin-top: 12px;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  text-overflow: ellipsis;
`;

export {
  ContentHeaderLayout,
  ContentCategoryBox,
  ContentCategory,
  ContentName,
  ContentCount,
  ContentCountItem,
  ContentVariety,
  ContentPreviewButton,
  ContentBanner,
  ContentDescription,
};
