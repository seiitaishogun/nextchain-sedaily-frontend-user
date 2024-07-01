import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Layout = styled.section`
  margin: 0 -15px;
  padding: 25px 15px;
  border-top: 15px solid #ececec;

  .swiper-slide {
    height: 125px;
  }

  .swiper-pagination {
    bottom: 0;

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background-color: #bababa;
      margin: 0 6px;
    }

    .swiper-pagination-bullet-active {
      background-color: #e01f27;
    }
  }

  .contents-banner {
    height: 95px;
    background: gray;
  }
`;

function BottomBanner() {
  return (
    <Layout>
      <Swiper
        pagination
        modules={[Autoplay, Navigation, Pagination]}
        loop
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="contents-banner" style={{ background: 'red' }} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="contents-banner" style={{ background: 'blue' }} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="contents-banner" style={{ background: 'green' }} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="contents-banner" style={{ background: 'black' }} />
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
}

export default BottomBanner;
