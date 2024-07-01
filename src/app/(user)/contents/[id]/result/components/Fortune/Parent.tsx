import React from 'react';
import { ParentT } from '@module/types/content/fortune';
import { ContentLayout } from '@/app/(user)/contents/[id]/result/components/Result.styled';
import Child from '@/app/(user)/contents/[id]/result/components/Fortune/Child';

interface Props {
  data: ParentT;
  isName?: boolean;
}

function FortuneParent({ data, isName }: Props) {
  return (
    <ContentLayout key={data.id}>
      {data.name && isName && (
        <h3
          id={`parent-title-${data.id}`}
          dangerouslySetInnerHTML={{ __html: data.name }}
        />
      )}
      {data.children.map((child: any) => (
        <Child key={child.id} data={child} />
      ))}
    </ContentLayout>
  );
}

export default FortuneParent;
