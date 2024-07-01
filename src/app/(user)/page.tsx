'use client';

import styled from 'styled-components';
import React from 'react';
import MainMoney from '@/app/(user)/components/Main/Money';
import MainGeneral from '@/app/(user)/components/Main/General';
import MainHealth from '@/app/(user)/components/Main/Health';
import MainTop from '@/app/(user)/components/Main/Top';
import MainToday from '@/app/(user)/components/Main/Today';
import MainLove from '@/app/(user)/components/Main/Love';
import DiscountModal from './components/Main/Modal';
// import BottomBanner from '@/app/(user)/components/Main/BottomBanner';

const Layout = styled.div`
  padding: 0 15px;
`;

function Home() {
  return (
    <Layout>
      <DiscountModal />
      <MainMoney />
      <MainGeneral />
      <MainHealth />
      <MainTop />
      <MainLove />
      {/* <BottomBanner /> */}
      <MainToday />
    </Layout>
  );
}

export default Home;
