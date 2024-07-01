'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '@/app/(user)/components/Layout/Header';
import Aside from '@/app/(user)/components/Layout/Aside';
import Footer from '@/app/(user)/components/Layout/Footer';

interface Props {
  children: React.ReactNode;
}

const RootLayout = styled.div`
  .luck_content {
    background: #fff;
    max-width: ${props => props.theme.maxDeviceWidth};
    margin: 10px auto;
  }

  .luck_content .info {
    text-align: center;
    font-size: 13px;
    color: #666;
    padding: 10px 0;
  }

  .luck_content .info a {
    display: inline;
    text-decoration: underline;
    color: #000;
    font-weight: 700;
  }
`;

function Layout({ children }: Props) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleToggleAside = () => {
    setIsAsideOpen(prev => !prev);
  };

  return (
    <RootLayout id="layout">
      <Header handleToggleAside={handleToggleAside} />
      <Aside isOpen={isAsideOpen} setIsOpen={setIsAsideOpen} />
      <main id="main" className="luck_content">
        {children}

        <p className="info">
          서비스 오류 발생 시{' '}
          <Link
            href="http://pf.kakao.com/_ymuIC/chat"
            target="_blank"
            prefetch={false}
          >
            고객센터
          </Link>
          로 내용을 접수해주세요.
        </p>
      </main>
      <Footer />
    </RootLayout>
  );
}

export default Layout;
