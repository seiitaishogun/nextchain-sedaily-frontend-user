import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { fetchContentPreview } from '@module/api/content';
import { ContentDetailT } from '@module/types/content/detail';
import Title from '@/app/(user)/components/Title';
import { ContentPreviewLayout as Layout } from '@/app/(user)/contents/[id]/components/Preview/styled';
import { SummaryListLayout } from '@/app/(user)/components/List/styled';
import ContentSample from '@/app/(user)/contents/[id]/components/Sample';

interface Props {
  content: ContentDetailT;
}

function ContentPreview({ content }: Props) {
  const params = useParams();
  const id = Number(params.id || 0);
  const { data } = useQuery(
    ['contentPreview', id],
    () => fetchContentPreview(id),
    {
      initialData: {
        data: [],
      },
      select: res => res.data.filter((r: any) => r.name !== 'null'),
    }
  );
  if (data.length === 0) return null;
  return (
    <Layout>
      <Title text="이런 내용이 있어요">
        <ContentSample content={content} />
      </Title>

      <SummaryListLayout>
        {data.map(({ id: cId, name }: any) => (
          <li key={cId}>
            <h4 dangerouslySetInnerHTML={{ __html: name }} />
          </li>
        ))}
      </SummaryListLayout>
    </Layout>
  );
}

export default ContentPreview;
