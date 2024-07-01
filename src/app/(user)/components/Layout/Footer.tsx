'use client';

import styled from 'styled-components';
import React from 'react';

const FooterLayout = styled.footer`
  position: relative;
  z-index: 3;
  background: #414141;
  padding: 0;
  text-align: center;
  color: #fff;
  margin-bottom: 0;
  bottom: 0;

  &.footer_article {
    padding-bottom: 50px;
  }

  .f_family {
    width: 100%;
    text-align: center;
    margin-bottom: 25px;
    font-size: 0;
  }

  .f_family li {
    display: inline-block;
    padding: 0 4px;
  }

  .f_family li:first-child a {
    color: #fff;
  }

  .f_family li:nth-child(2):after {
    display: inline-block;
    content: '';
    width: 1px;
    background: #5e5e5e;
    height: 12px;
    vertical-align: middle;
    margin: -10px 0 0 8px;
  }

  .f_family li:nth-child(2):before {
    display: inline-block;
    content: '';
    width: 1px;
    background: #5e5e5e;
    height: 12px;
    vertical-align: middle;
    margin: -10px 8px 0 0;
  }

  .f_family li:nth-child(3):after {
    display: inline-block;
    content: '';
    width: 1px;
    background: #5e5e5e;
    height: 12px;
    vertical-align: middle;
    margin: -10px 0 0 8px;
  }

  .f_family li a {
    display: inline;
    color: #999;
    font-size: 13px;
  }

  @media all and (max-width: 335px) {
    .f_family li a {
      font-size: 12px;
    }
  }

  .footer_txt {
    font-size: 17px;
    margin-bottom: 12px;
  }

  .sns_area {
    font-size: 0;
  }

  .sns_area a {
    display: inline-block;
    text-indent: -1000em;
    font-size: 0;
    margin-right: 5px;
    width: 35px;
    height: 35px;
    background: #fff;
    border-radius: 50%;
  }

  .sns_area a.btn_face {
    background: #fff
      url(${props => `${props.theme.imageUrl}/common/ico_face.svg`}) no-repeat
      50% 50%;
    background-size: 9px;
  }

  .sns_area a.btn_twit {
    background: #fff
      url(${props => `${props.theme.imageUrl}/common/ico_twit.svg`}) no-repeat
      50% 50%;
    background-size: 16px;
  }

  .sns_area a.btn_tel {
    background: #fff
      url(${props => `${props.theme.imageUrl}/common/ico_tel.svg`}) no-repeat
      40% 50%;
    background-size: 17px;
  }

  .sns_area a.btn_utv {
    background: #fff
      url(${props => `${props.theme.imageUrl}/common/ico_utv.svg`}) no-repeat
      50% 50%;
    background-size: 18px;
  }

  .sns_area a.btn_insta {
    background: #fff
      url(${props => `${props.theme.imageUrl}/common/btn_insta.svg`}) no-repeat
      50% 50%;
    background-size: 15px;
  }

  .copy_right {
    font-size: 13px;
    margin-top: 27px;
    color: #888888;
    padding-bottom: 30px;
  }

  .copy_right span {
    color: #fff;
  }

  .copy_right a {
    display: inline;
    color: #888888;
  }

  .copy_right span.ico_phone {
    display: inline-block;
    background: url(${props => `${props.theme.imageUrl}/common/ico_phone.svg`})
      no-repeat;
    background-size: 12px;
    width: 12px;
    height: 13px;
    vertical-align: middle;
    margin-top: 1px;
  }

  .ft_sitemap {
    margin-bottom: 30px;
    background: #ededed;
  }

  .ft_sitemap .all_menu_list {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }

  .ft_sitemap .all_menu_list li {
    font-size: 13px;
    color: #1c1c1c;
    width: 25%;
    border: 1px solid #e7e7e7;
    border-left: 1px solid #e7e7e7;
    border-top: 0;
    border-right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    height: 40px;
    box-sizing: border-box;
  }

  .ft_sitemap .all_menu_list li:nth-child(-n + 4) {
    border-top: 0;
  }

  .ft_sitemap .all_menu_list li:first-child {
    border-left: 0;
  }

  .ft_sitemap .all_menu_list li:nth-child(4n + 1) {
    border-left: 0;
  }
`;

function Footer() {
  return (
    <FooterLayout id="footer">
      <div className="ft_sitemap">
        <ul className="all_menu_list">
          <li>
            <a
              href="https://m.sedaily.com/v/Rank/"
              target="_self"
              rel="noreferrer"
            >
              주요뉴스
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/v/RankPopular/"
              target="_self"
              rel="noreferrer"
            >
              인기뉴스
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/v/RankAll/"
              target="_self"
              rel="noreferrer"
            >
              실시간뉴스
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/RankAll/GA/"
              target="_self"
              rel="noreferrer"
            >
              증권
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/RankAll/GB/"
              target="_self"
              rel="noreferrer"
            >
              부동산
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/RankAll/GC/"
              target="_self"
              rel="noreferrer"
            >
              경제·금융
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/RankAll/GD/"
              target="_self"
              rel="noreferrer"
            >
              산업
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/RankAll/GE/"
              target="_self"
              rel="noreferrer"
            >
              정치
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/RankAll/GK/"
              target="_self"
              rel="noreferrer"
            >
              사회
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/RankAll/GF/"
              target="_self"
              rel="noreferrer"
            >
              국제
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/RankAll/GG/"
              target="_self"
              rel="noreferrer"
            >
              오피니언
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/RankAll/GH/"
              target="_self"
              rel="noreferrer"
            >
              문화·스포츠
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/RankAll/GL/"
              target="_self"
              rel="noreferrer"
            >
              서경스타
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/RankAll/XC/"
              target="_self"
              rel="noreferrer"
            >
              서경골프
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/v/Digital/"
              target="_self"
              rel="noreferrer"
            >
              디지털뉴스
            </a>
          </li>
          <li>
            <a
              href="https://m.sedaily.com/AwesomeMoney"
              target="_self"
              rel="noreferrer"
            >
              마켓시그널
            </a>
          </li>
        </ul>
      </div>

      <ul className="f_family">
        <li>
          <a
            href="https://m.sedaily.com/Info/Company/SvcPrivate"
            data-f_value="f_private"
            target="_self"
            rel="noreferrer"
          >
            개인정보취급방침
          </a>
        </li>
        <li>
          <a
            href="https://m.sedaily.com/Info/Company/Svcprovision"
            data-f_value="f_provision"
            target="_self"
            rel="noreferrer"
          >
            이용약관
          </a>
        </li>

        <li>
          <a
            href="https://m.sedaily.com/Info/Company/Grievance"
            target="_self"
            rel="noreferrer"
          >
            고충처리인
          </a>
        </li>
        <li>
          <a
            href="https://m.sedaily.com/NewsArchive"
            target="_self"
            rel="noreferrer"
          >
            뉴스아카이브
          </a>
        </li>
      </ul>
      <p className="footer_txt">서울경제를 팔로우 하세요</p>
      <div className="sns_area">
        <a
          href="https://www.facebook.com/seouleconomydaily/"
          target="_blank"
          className="btn_face"
          rel="noreferrer"
        >
          facebook
        </a>
        <a
          href="https://twitter.com/sedaily_com"
          target="_blank"
          className="btn_twit"
          rel="noreferrer"
        >
          twitter
        </a>
        <a
          href="https://m.sedaily.com/Info/Company/TelegramNews"
          target="_top"
          className="btn_tel f_telegram_news"
          data-f_value="f_telegram"
        >
          telegram
        </a>
        <a
          href="https://www.youtube.com/channel/UCIh431O7x00rZke3oNBuRRA/"
          target="_blank"
          className="btn_utv"
          rel="noreferrer"
        >
          유튜브
        </a>
        <a
          href="https://www.instagram.com/seoulkyungjae/"
          target="_blank"
          className="btn_insta"
          rel="noreferrer"
        >
          인스타그램
        </a>
      </div>
      <div className="copy_right">
        <a href="https://m.sedaily.com" target="_self" rel="noreferrer">
          ⓒ 서울경제
        </a>{' '}
        All right reserved. <span className="ico_phone" /> 02)724-8600
      </div>
    </FooterLayout>
  );
}

export default Footer;
