import React from 'react';
import { PurchaseT, SajuT } from '@module/types/content/result';
import { ContentDetailT } from '@module/types/content/detail';
import ContentCategory from '@/app/(user)/contents/[id]/components/Header/Category';
import ContentUserInfo from '@/app/(user)/contents/[id]/result/components/Saju/Header/User';
import {
  ContentResultHeaderLayout as Layout,
  ContentName,
} from '@/app/(user)/contents/[id]/result/components/Saju/Header/styled';

interface Props {
  content: ContentDetailT;
  purchase: PurchaseT;
  saju: SajuT[];
}

function ContentHeader({ content, purchase, saju }: Props) {
  return (
    <Layout>
      <ContentCategory
        type={content.type.description}
        category={content.category?.name}
      />
      <ContentUserInfo purchase={purchase} saju={saju} />
      <ContentName>{content.name}</ContentName>
    </Layout>
  );
}

export default ContentHeader;
