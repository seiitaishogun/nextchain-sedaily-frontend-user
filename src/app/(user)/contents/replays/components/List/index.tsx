import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Spinner from '@module/components/Common/Spinner';
import { EmptyButton, EmptyList } from '@/app/(user)/styles/layout/list.styled';
import { ListProps } from '@/app/(user)/contents/replays/components/List/types';
import ListItem from '@/app/(user)/contents/replays/components/List/item';
import { ListLayout as Layout } from '@/app/(user)/contents/replays/components/List/styled';

function List({ data, isLoading, hasNextPage, fetchNextPage }: ListProps) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  if (!data) {
    return <Spinner />;
  }

  if (data.pages.length === 0 && !isLoading) {
    return (
      <EmptyList>
        <p>조회 가능한 정보가 없습니다</p>
        <EmptyButton href="/contents/replays" prefetch={false}>
          다시 입력하기
        </EmptyButton>
      </EmptyList>
    );
  }

  return (
    <Layout className="list-layout">
      {data.pages.map((d: any) => (
        <ListItem key={d.id} data={d} />
      ))}

      <div ref={ref} />
      {isLoading && <Spinner />}
    </Layout>
  );
}

export default List;
