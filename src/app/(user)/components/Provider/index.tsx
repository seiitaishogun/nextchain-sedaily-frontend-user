'use client';

import React, { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TagManager from 'react-gtm-module';
import StyledComponentsRegistry from '@module/lib/register';
import GlobalStyle from '@/app/(user)/styles/GlobalStyle';
import theme from '@/app/(user)/styles/theme';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const tagManagerArgs = {
  gtmId: process.env.GOOGLE_GTM_ID_FLES,
};

function Provider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div>{children}</div>
          </ThemeProvider>
        </StyledComponentsRegistry>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default Provider;
