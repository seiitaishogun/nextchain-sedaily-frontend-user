import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useFormContext } from 'react-hook-form';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { ContentDetailT, ContentTarotT } from '@module/types/content/detail';
import { MessageBox } from '@/app/(user)/contents/[id]/components/Form/Form.styled';
import Card from '@/app/(user)/contents/[id]/components/Form/Tarot/Card';
import TarotForm from '@/app/(user)/contents/[id]/components/Form/Tarot/Form';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { CardSection } from '@/app/(user)/contents/[id]/components/Form/Tarot/styled';

interface Props {
  content: ContentDetailT;
  tarot: ContentTarotT[];
  maxCardCount: number;
  isPartner: boolean;
}

function TaroFormContainer({ content, tarot, maxCardCount, isPartner }: Props) {
  const swiperRef = useRef<any>(null);
  const [tarotCards, setTarotCards] = useState<Array<number>>([]);
  const [flag, setFlag] = useState<boolean>(false);
  const { watch } = useFormContext();
  const selectedCard = watch('tarot') || [];
  const cardCount = selectedCard?.length || 0;

  const shuffleCards = useCallback(() => {
    const formatSelectedCard = selectedCard.map((card: string) =>
      Number(card.slice(0, -1))
    );

    const selectedTarot = tarot[cardCount];
    const { is_straight } = selectedTarot;

    const cards = Array.from(
      { length: is_straight ? 11 : 22 },
      (v, i) => i + 1
    );
    return cards
      .filter(c => !formatSelectedCard.includes(c))
      .sort(() => Math.random() - 0.5);
  }, [selectedCard]);

  useEffect(() => {
    setTarotCards(shuffleCards());
  }, []);

  useLayoutEffect(() => {
    if (tarotCards.length > 0) {
      const slidePosition = tarot[cardCount]?.is_straight ? 5 : 10;
      swiperRef.current.update();
      swiperRef.current.slideTo(slidePosition); // 카드 중앙 위치
      setFlag(false);

      if (cardCount === maxCardCount) {
        swiperRef.current.enabled = false;
      }
    }
  }, [tarotCards]);

  const handleUpdateCards = () => {
    if (cardCount === maxCardCount) {
      return;
    }
    setTarotCards(shuffleCards());
  };

  return (
    <>
      <TarotForm text="타로정보 입력" isUser content={content} />

      {isPartner && <TarotForm text="" isUser={false} />}

      <CardSection>
        <MessageBox>
          {cardCount === maxCardCount ? (
            <span>
              카드를 모두 선택 하셨습니다.
              <br /> 결과를 확인해 주세요.
            </span>
          ) : (
            <span
              dangerouslySetInnerHTML={{
                __html:
                  tarot[cardCount].name !== 'null'
                    ? tarot[cardCount].name
                    : '타로 카드를 선택해 주세요.',
              }}
            />
          )}
        </MessageBox>

        <Swiper
          onInit={swiper => {
            swiperRef.current = swiper;
          }}
          effect="cards"
          grabCursor
          modules={[EffectCards]}
          className="mySwiper"
          cardsEffect={{
            perSlideOffset: 65,
            perSlideRotate: 15,
            rotate: true,
          }}
          centeredSlides
          slideToClickedSlide
        >
          {tarotCards.map(card => (
            <SwiperSlide key={card}>
              <Card
                card={card}
                maxCardCount={maxCardCount}
                selectedTarot={tarot[cardCount]}
                flag={flag}
                setFlag={setFlag}
                handleUpdateCards={handleUpdateCards}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CardSection>
    </>
  );
}

export default TaroFormContainer;
