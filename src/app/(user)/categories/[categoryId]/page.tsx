'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { fetchCategoryList } from '@module/api/category';
import useCategories from '@module/hooks/common/useCategories';
import { getContentURL } from '@module/utils/url';
import List from '@/app/(user)/categories/components/List';
import { ListFullThumbnail } from '@/app/(user)/components/List/styled';
import { TitleLayout } from '@/app/(user)/components/Title/LinkTitle';

const Layout = styled.section`
  overflow: hidden;
  padding: 0 15px;

  ${TitleLayout} {
    margin-top: 20px;
  }
`;

const TopBox = styled.div`
  // padding-bottom: 20px;
  // border-bottom: 1px solid ${props => props.theme.colors.gray100};
`;

function Categories() {
  const router = useRouter();
  const params = useParams();
  const categoryId = Number(params.categoryId || 0);
  const categoryData = useCategories() || [];
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['categoryList', categoryId],
      ({ pageParam = 1 }) =>
        fetchCategoryList({
          id: categoryId,
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

  useEffect(() => {
    if (!categoryId) router.push('/error');
  }, [categoryId]);

  const getCategoryAssets = (curCategoryId: number) => {
    switch (curCategoryId) {
      case 10:
        return {
          id: 6,
          name: `2024 신년운세`,
          thumbnail: `/main/thumbnail_6.webp`,
        };
      default:
        return null;
    }
  };

  const title = categoryData.find(item => item.id === categoryId)?.name || '';

  const assets = getCategoryAssets(categoryId);
  const contentPath = getContentURL(assets?.id || 0);

  return (
    <Layout>
      {assets && (
        <TopBox>
          <Link href={contentPath} prefetch={false}>
            <ListFullThumbnail>
              <Image src={assets.thumbnail} alt="" fill />
            </ListFullThumbnail>
          </Link>
        </TopBox>
      )}

      <TitleLayout>{title}</TitleLayout>
      <List
        data={data}
        isLoading={isLoading || isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </Layout>
  );
}

export default Categories;
