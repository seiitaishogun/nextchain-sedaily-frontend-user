import { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  ContentDetailT,
  ContentStatusRelatedRequest,
} from '@module/types/content/detail';
import { fetchContentStatusRelated } from '@module/api/content/related';
import SwiperList from '../SwipeList';

interface RelatedContentProps {
  content: ContentDetailT;
  title: ReactNode;
  status: ContentStatusRelatedRequest;
  statusName: string;
}

function StatusRelatedList({
  content,
  title,
  status,
  statusName,
}: RelatedContentProps) {
  const contentListStatusRelated = useQuery(
    [`contentStatusRelated${statusName}`, content.id],
    () => fetchContentStatusRelated(status),
    {
      initialData: {
        data: [],
      },
      select: res => res.data,
    }
  );
  if (contentListStatusRelated.data.length === 0) return null;
  return (
    <SwiperList
      size="large"
      data={contentListStatusRelated.data}
      title={title}
    />
  );
}

export default StatusRelatedList;
