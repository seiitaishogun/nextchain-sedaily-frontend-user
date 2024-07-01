import styled from 'styled-components';

const SwipeListThumbnail = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

const SwipeListLargeThumbnail = styled(SwipeListThumbnail)`
  margin-top: 0px;
`;

export { SwipeListThumbnail, SwipeListLargeThumbnail };
