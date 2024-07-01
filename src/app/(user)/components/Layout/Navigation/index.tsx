'use client';

import React from 'react';
import styled from 'styled-components';
import NavigationMenu from '@/app/(user)/components/Layout/Navigation/Menu';

const HeaderNavigation = styled.nav`
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  border-bottom: 1px solid #e7e7e7;

  .all_menu {
    background: url(${props => `${props.theme.imageUrl}/common/btn_menu.svg`})
      no-repeat 50% 50%;
    background-size: 17px auto;
    width: 17px;
    height: 38px;
    margin: 0 15px;
    display: block;
    text-indent: -1000em;
  }

  .swiper {
    overflow: hidden;
    position: relative;
    width: calc(100% - 55px);

    @media (max-width: 768px) {
      padding-right: 10px;
    }
  }

  .swiper-wrapper {
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 768px) {
      justify-content: space-between;
    }
  }

  .swiper-slide {
    //flex: 1;
    width: auto;
    padding: 0 7px;
    font-size: 15px;
    font-weight: bold;
    line-height: 38px;
    color: #000;
    text-align: center;

    &.active a {
      color: #e01f26;
    }
  }
`;

interface Props {
  handleToggleAside: () => void;
}

function Navigation({ handleToggleAside }: Props) {
  return (
    <HeaderNavigation>
      <button type="button" className="all_menu" onClick={handleToggleAside}>
        전체메뉴
      </button>

      <NavigationMenu />
    </HeaderNavigation>
  );
}

export default Navigation;
