'use client';

import React from 'react';
import styled from 'styled-components';
import ReplayForm from '@/app/(user)/contents/replays/components/Form';
import { TitleLayout } from '@/app/(user)/components/Title/LinkTitle';

const Layout = styled.div`
  padding: 0 15px;

  ${TitleLayout} {
    margin-top: 20px;
    padding: 0;
  }
`;

function ContentReplay() {
  return (
    <Layout>
      <TitleLayout>콘텐츠 다시보기</TitleLayout>
      <ReplayForm />
    </Layout>
  );
}

export default ContentReplay;
