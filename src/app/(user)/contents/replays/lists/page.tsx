'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getCookie } from 'cookies-next';
import React from 'react';
import { fetchContentReplayList } from '@module/api/content/replay';
import { USER_PURCHASE_HASH_KEY } from '@module/constants/user/hash';
import useAlert from '@module/hooks/common/useAlert';
import List from '@/app/(user)/contents/replays/components/List';
import { TitleLayout } from '@/app/(user)/components/Title/LinkTitle';

const Layout = styled.div`
  padding: 0 14px;

  ${TitleLayout} {
    margin-top: 20px;
    padding-bottom: 12px;
  }
`;

function ContentReplayList() {
  const { renderMessage } = useAlert();

  const purchaseHash = (getCookie(USER_PURCHASE_HASH_KEY) || '').toString();

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['contentReplayList'],
    ({ pageParam = 1 }) =>
      fetchContentReplayList({
        page: pageParam,
        purchase_hash: purchaseHash,
      }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.data.last_page < nextPage ? undefined : nextPage;
      },
      select: res => ({
        pages: res?.pages.flatMap(p => p.data.list),
        pageParams: res.pageParams,
      }),
    }
  );

  return (
    <>
      <Layout>
        <TitleLayout>콘텐츠 다시보기</TitleLayout>
        <List
          data={isError ? { pages: [] } : data}
          isLoading={isLoading || isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </Layout>
      {renderMessage()}
    </>
  );
}

export default ContentReplayList;
