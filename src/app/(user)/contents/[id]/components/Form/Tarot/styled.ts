import styled from 'styled-components';
import {
  HEIGHT,
  WIDTH,
} from '@/app/(user)/contents/[id]/components/Form/Tarot/Card/constants';

const CardSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 380px;
  margin-top: 18px;
  padding: 40px 0;
  background: url(${props =>
      `${props.theme.imageUrl}/content/tarot/tarot_bg.webp`})
    no-repeat center center;
  background-size: cover;

  .swiper {
    overflow: visible !important;
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    margin-top: 17px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    .swiper-slide {
      overflow: visible;

      &.swiper-slide-active {
        scale: 1;
      }
    }
  }
`;

export { CardSection };
