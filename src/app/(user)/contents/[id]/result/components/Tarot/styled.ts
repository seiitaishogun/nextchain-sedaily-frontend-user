import styled from 'styled-components';
import { PaddingBox } from '@/app/(user)/contents/[id]/result/components/Result.styled';

const TarotResultLayout = styled.div`
  padding-top: 18px;
`;

const Tab = styled.div<{ $tabCount: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $tabCount }) => $tabCount}, 1fr);
  width: 100%;
  height: 58px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    padding: 0 8px;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    background: #ffffff;
    color: rgba(0, 0, 0, 0.32);
    font-size: 15px;
    letter-spacing: -0.2px;
    overflow: hidden;

    &.active {
      border-bottom: 2px solid #e01f27;
      font-weight: 600;
      color: #000;
    }

    > div {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const TarotCardSection = styled(PaddingBox)`
  margin-top: 16px;

  .swiper-button-prev,
  .swiper-button-next {
    display: flex !important;
    color: ${props => props.theme.colors.primary};
  }

  .swiper:hover {
    .swiper-button-prev,
    .swiper-button-next {
      display: block;
    }
  }

  .swiper-pagination-div {
    text-align: center;

    .swiper-pagination-bullet {
      width: 5px;
      height: 5px;
      background-color: #9e9e9e;
      margin: 0 2px;
    }

    .swiper-pagination-bullet-active {
      width: 6px;
      height: 6px;
      background-color: #000;
    }
  }

  .tarot-card-box {
    margin: 0;
    padding: 0;
    border: 0;
    box-shadow: none;
  }
`;

const TarotCard = styled.div<{ $cardImg: string }>`
  width: 100%;
  min-height: 645px;
  height: auto;
  display: flex;
  box-sizing: border-box;
  padding: 16px 0;
  border-radius: 8px;
  background: url(${({ $cardImg }) => $cardImg}) no-repeat center center;
  background-size: contain;
`;

const BottomNavigation = styled.div`
  display: flex;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 52px;
    margin-top: 12px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    background: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.21px;
  }
`;

export {
  TarotResultLayout,
  Tab,
  TarotCardSection,
  TarotCard,
  BottomNavigation,
};
