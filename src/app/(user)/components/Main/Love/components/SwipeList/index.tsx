import styled, { css } from 'styled-components';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContentRecommendList } from '@module/types/content/detail';
import 'swiper/css';
import 'swiper/css/navigation';
import Large from './Item/Large';
import LinkTitle from '@/app/(user)/components/Title/LinkTitle';

interface SwipeListProps {
  data: ContentRecommendList[];
  size: 'medium' | 'large';
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
    &:last-child {
      margin-right: 15px !important;
    }

    ${props =>
      props.size === 'large' &&
      css`
        width: 293px;
      `}
  }
`;

function SwiperList({ size, data }: SwipeListProps) {
  return (
    <Layout size={size}>
      <LinkTitle
        text={`나의 ${data[0].category_name} 확인하기`}
        href={`/categories/${data[0].category_id}`}
      />
      {data.length > 0 ? (
        <Swiper
          freeMode
          slidesPerView="auto"
          spaceBetween={15}
          modules={[FreeMode]}
        >
          {data.map(d => (
            <SwiperSlide key={d.id}>
              <Large data={d} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </Layout>
  );
}

export default SwiperList;
