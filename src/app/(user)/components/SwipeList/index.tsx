import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Medium from '@/app/(user)/components/SwipeList/Item/Medium';
import Large from '@/app/(user)/components/SwipeList/Item/Large';
import { MainProps } from '@/app/(user)/components/Main/types';

import 'swiper/css';
import 'swiper/css/navigation';

interface SwipeListProps extends MainProps {
  size: 'medium' | 'large';
}

const Layout = styled.div<{ size: 'medium' | 'large' }>`
  margin-right: -15px;

  .swiper-slide {
    &:last-child {
      margin-right: 15px !important;
    }

    ${props =>
      props.size === 'medium' &&
      css`
        min-width: 195px;
        max-width: 195px;
      `}

    ${props =>
      props.size === 'large' &&
      css`
        width: 293px;
      `}
  }
`;

function SwiperList({ size, data }: SwipeListProps) {
  const renderListItem = () => {
    switch (size) {
      case 'medium':
        return data.map(d => (
          <SwiperSlide key={d.id}>
            <Medium data={d} />
          </SwiperSlide>
        ));
      case 'large':
        return data.map(d => (
          <SwiperSlide key={d.id}>
            <Large data={d} />
          </SwiperSlide>
        ));
      default:
        return null;
    }
  };

  const listItem = renderListItem();

  return (
    <Layout size={size}>
      <Swiper
        freeMode
        slidesPerView="auto"
        spaceBetween={15}
        modules={[FreeMode]}
      >
        {listItem}
      </Swiper>
    </Layout>
  );
}

export default SwiperList;
