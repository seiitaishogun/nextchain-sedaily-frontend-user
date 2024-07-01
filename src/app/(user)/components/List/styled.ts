import styled, { css } from 'styled-components';

const ListLargeThumbnail = styled.div`
  overflow: hidden;
  width: 100px;
  height: 100px;
  border-radius: 6px;

  img {
    position: relative !important;
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: top;
  }
`;

const ListMediumThumbnail = styled.div`
  overflow: hidden;
  width: 111px;
  height: 82px;
  border-radius: 6px;

  img {
    position: relative !important;
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: top;
  }
`;

const ListFullThumbnail = styled.div`
  overflow: hidden;
  width: auto;
  max-height: 320px;
  margin: 0 -15px;
  border-bottom-right-radius: 55px;

  img {
    position: relative !important;
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: top;
  }
`;

const ListName = styled.h4`
  overflow: hidden;
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ListSummary = styled.p`
  overflow: hidden;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ListLargeSummary = styled(ListSummary)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 12px;
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  white-space: normal;
`;

const ListLargeName = styled(ListName)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  //margin-top: 30px;
  margin-top: 20px;
  //font-size: 38px;
  font-size: 24px;
  font-weight: bold;
  //line-height: 55px;
  line-height: 29px;
`;

const ListSmallName = styled(ListName)`
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
`;

const ListDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  text-overflow: ellipsis;
`;

const ListViewCount = styled.div`
  padding-left: 24px;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  background: url(${props => `${props.theme.imageUrl}/common/view_icon.svg`})
    no-repeat left center;
  background-size: 20px 20px;
  color: ${props => props.theme.colors.placeholder};
`;

const ListDateBox = styled.div`
  margin-top: 8px;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  color: ${props => props.theme.colors.black100};
`;

const SummaryListLayout = styled.ul<{ $size?: 'medium' | 'large' }>`
  padding-left: 8px;
  list-style: inside disc;

  li {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;

    ${props =>
      props.$size === 'large' &&
      css`
        font-size: 18px;
      `}

    &:first-child {
      margin-top: 0;
    }

    a,
    h4 {
      display: inline;
      color: ${props => props.theme.colors.black};
    }
  }
`;

export {
  ListMediumThumbnail,
  ListFullThumbnail,
  ListLargeThumbnail,
  ListName,
  ListSummary,
  ListLargeSummary,
  ListLargeName,
  ListSmallName,
  ListDescription,
  ListViewCount,
  ListDateBox,
  SummaryListLayout,
};
