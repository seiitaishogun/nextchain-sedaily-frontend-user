'use client';

import Link from 'next/link';
import styled from 'styled-components';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { contentInfoAtom } from '@module/store/content/info';
import { ContentTypeE } from '@module/types/content';
import useShare from '@module/hooks/common/useShare';
import Navigation from '@/app/(user)/components/Layout/Navigation';
import Share from "@/app/(user)/components/Share";

const HeaderLayout = styled.header`
  position: relative;
  padding-top: 61px;
  background: #fff;
`;

const HeaderGnb = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  height: 61px;
  width: 100%;
  background: ${props => props.theme.colors.white};
  text-align: center;

  a {
    display: inline-block;
  }

  .logo_seoul {
    position: absolute;
    left: 15px;
    top: 50%;
    margin-top: -7px;

    img {
      width: 64px;
    }
  }

  .logo_luck img {
    width: 122px;
  }

  .btn {
    display: inline-block;
    text-indent: -1000em;
    border-radius: 50%;
    border: 1px solid #e0e0e0;
    width: 36px;
    height: 36px;
    position: absolute;
    font-size: 0;
    top: 50%;
    margin-top: -18px;
    box-sizing: border-box;

    &.btn_share {
      background: #fff
        url(${props => `${props.theme.imageUrl}/common/btn_share.png`}) 45% 50%
        no-repeat;
      background-size: 15px;
      right: 15px;
    }

    &.btn_search {
      background: #fff
        url(${props => `${props.theme.imageUrl}/common/btn_search.png`}) 50% 50%
        no-repeat;
      background-size: 16px;
      right: 54px;
    }
  }
`;

interface Props {
  handleToggleAside: () => void;
}

function Header({ handleToggleAside }: Props) {
  const contentInfo = useRecoilValue(contentInfoAtom);

  const logoImage = useMemo(() => {
    switch (contentInfo?.type) {
      case ContentTypeE.Saju:
        return '/common/logo_luck.png';
      case ContentTypeE.Tarot:
        return '/common/logo_taro.png';
      default:
        return '/common/logo_luck.png';
    }
  }, [contentInfo]);

  const { handleShare, renderShare } = useShare({
    kakaoOptions: {
      name: '서울경제 운세',
      image:
        contentInfo?.banner_mobile ||
        `${process.env.APP_IMAGE_URL}/common/og_logo_luck.jpg`,
      description: '서울경제 운세 보러가기',
    },
    ShareComponent: Share,
  });

  return (
    <>
      <HeaderLayout>
        <HeaderGnb>
          <Link
            href="http://m.sedaily.com"
            className="logo_seoul"
            prefetch={false}
          >
            <Image
              src="/common/logo_seoul.png"
              alt="서울경제 홈"
              width={64}
              height={13}
            />
          </Link>

          <Link href="/" className="logo_luck" prefetch={false}>
            <Image
              src={logoImage}
              alt="서울경제 운세"
              width={122}
              height={55}
            />
          </Link>

          {/*
        <Link href="#" className="btn btn_search" prefetch={false}>
          검색
        </Link>
        */}
          <Link
            href="#"
            className="btn btn_share"
            onClick={handleShare}
            prefetch={false}
          >
            공유
          </Link>
        </HeaderGnb>

        <Navigation handleToggleAside={handleToggleAside} />
      </HeaderLayout>

      {renderShare()}
    </>
  );
}

export default Header;
