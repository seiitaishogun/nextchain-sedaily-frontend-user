import React, { useEffect, useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import {
  ContentLayout,
  PaddingBox,
} from '@/app/(user)/contents/[id]/result/components/Result.styled';
import Fortune from '@/app/(user)/contents/[id]/result/components/Fortune';
import {
  Tab,
  TarotCardSection,
  TarotCard,
  BottomNavigation,
  TarotResultLayout,
} from '@/app/(user)/contents/[id]/result/components/Tarot/styled';
import { TarotResultProps } from '@/app/(user)/contents/[id]/result/components/Tarot/types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ContentCategory from '@/app/(user)/contents/[id]/components/Header/Category';

function TarotResult({ content, parents, purchase }: TarotResultProps) {
  const swiperRef = useRef<any>(null);
  const [tab, setTab] = useState(0);
  const menus = parents.map((p: any) => p.children[0]);
  const selectedCards = (purchase.value || '').trim().split(',');

  useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(tab);
  }, [tab]);

  const handleTabPrev = () => {
    if (tab === 0) return;
    setTab(tab - 1);
    window.scrollTo(0, 0);
  };

  const handleTabNext = () => {
    if (tab === menus.length - 1) return;
    setTab(tab + 1);
    window.scrollTo(0, 0);
  };

  const isSingle = menus.length === 1;

  return (
    <TarotResultLayout>
      <PaddingBox>
        <ContentCategory
          type={content.type.description}
          category={content.category?.name}
        />
      </PaddingBox>

      <Tab $tabCount={parents.length}>
        {menus.map((menu: any, i: number) => (
          <button
            key={i}
            type="button"
            className={classNames('item', { active: i === tab })}
            onClick={() => setTab(i)}
          >
            <div>Card {i + 1}</div>
          </button>
        ))}
      </Tab>

      <TarotCardSection>
        <Swiper
          onInit={swiper => {
            swiperRef.current = swiper;
          }}
          spaceBetween={10}
          grabCursor
          longSwipes
          navigation={!isSingle}
          pagination={{
            el: '.swiper-pagination-div',
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          onSlideChange={swiper => setTab(swiper.activeIndex)}
          onSwiper={swiper => swiper.slideTo(tab)}
        >
          {selectedCards.map((card: string) => (
            <SwiperSlide key={card}>
              <ContentLayout className="tarot-card-box">
                <TarotCard
                  $cardImg={`${process.env.APP_IMAGE_URL}/content/tarot/result/${card}.jpg`}
                />
              </ContentLayout>
            </SwiperSlide>
          ))}
        </Swiper>
        {!isSingle && <div className="swiper-pagination-div" />}

        <Fortune parents={parents} selectedTabIndex={tab} isName={false} />

        {!isSingle && (
          <BottomNavigation>
            <button type="button" onClick={handleTabPrev}>
              이전 카드
            </button>
            <button type="button" onClick={handleTabNext}>
              다음 카드
            </button>
          </BottomNavigation>
        )}
      </TarotCardSection>
    </TarotResultLayout>
  );
}

export default TarotResult;
