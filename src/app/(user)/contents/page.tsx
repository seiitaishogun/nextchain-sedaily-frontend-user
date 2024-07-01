'use client';

import React from 'react';
import styled from 'styled-components';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchContentAll } from '@module/api/content/list';
import List from '@/app/(user)/categories/components/List';
import { TitleLayout } from '@/app/(user)/components/Title/LinkTitle';

const Layout = styled.section`
  padding: 0 14px;

  ${TitleLayout} {
    margin-top: 12px;
    padding-bottom: 12px;
  }
`;

function ContentList() {
  const router = useRouter();
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['contentList'],
      ({ pageParam = 1 }) =>
        fetchContentAll({
          page: pageParam,
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
        onError: () => {
          router.replace('/error');
        },
      }
    );

  return (
    <Layout>
      <TitleLayout>운세 전체보기</TitleLayout>

      <List
        data={data}
        isLoading={isLoading || isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </Layout>
  );
}

export default ContentList;
