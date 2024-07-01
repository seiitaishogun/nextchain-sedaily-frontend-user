import React, { Dispatch, SetStateAction } from 'react';
import Script from 'next/script';
import { KakaoShareOptions } from '@module/types/common/share';
import { ShareSocialItem } from '@/app/(user)/components/Share/Share.styled';

interface Props extends KakaoShareOptions {
  url: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function ShareKakao({ url, setIsOpen, name, image, description: text }: Props) {
  const imageUrl =
    image || `${process.env.APP_IMAGE_URL}/common/og_logo_luck.jpg`;
  const description = text || '친구에게 공유하기';
  const shareMessage = () => {
    if (!window.Kakao) return;
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.KAKAO_JAVASCRIPT_KEY);
    }
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: name || '운세',
        description,
        imageUrl,
        imageWidth: 800,
        imageHeight: 400,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    });

    setIsOpen(false);
  };

  return (
    <>
      <ShareSocialItem className="btn_kakao" onClick={shareMessage} />

      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
        integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
        crossOrigin="anonymous"
      />
    </>
  );
}

export default ShareKakao;
