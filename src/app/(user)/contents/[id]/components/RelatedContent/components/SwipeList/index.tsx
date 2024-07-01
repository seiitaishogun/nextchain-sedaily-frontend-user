import styled, { css } from 'styled-components';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactNode } from 'react';
import { ContentRelatedList } from '@module/types/content/detail';
import 'swiper/css';
import 'swiper/css/navigation';
import Large from './Item/Large';

interface SwipeListProps {
  data: ContentRelatedList[];
  size: 'medium' | 'large';
  title: ReactNode;
  showCategoryName?: boolean;
}

const Layout = styled.div<{ size: 'medium' | 'large' }>`
  margin-right: -14px;
  width: calc(100% + 15px);

  h2 {
    margin-right: -40px;
    width: 610px;
    font-size: 20px;
    font-weight: 700;
    color: #121212;
    margin-top: 20px;
    padding: 14px 0px;
    border-top: 1px solid #ededed;
    span {
      color: #142c67;
    }
  }

  .swiper-slide {
    ${props =>
      props.size === 'medium' &&
      css`
        min-width: 195px;
        max-width: 195px;
      `}

    ${props =>
      props.size === 'large' &&
      css`
        min-width: 260px;
        max-width: 260px;
      `}
  }
`;

function SwiperList({ size, data, title, showCategoryName }: SwipeListProps) {
  return (
    <Layout size={size}>
      {title}
      {data.length > 0 ? (
        <Swiper
          freeMode
          slidesPerView="auto"
          spaceBetween={24}
          modules={[FreeMode]}
        >
          {data.map(d => (
            <SwiperSlide key={d.id}>
              <Large data={d} showCategoryName={showCategoryName} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </Layout>
  );
}

export default SwiperList;
