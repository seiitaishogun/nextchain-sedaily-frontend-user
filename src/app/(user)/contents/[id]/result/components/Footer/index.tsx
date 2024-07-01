import React from 'react';
import ContentLike from '@/app/(user)/contents/[id]/result/components/Footer/Like';
import ContentShare, {
  ContentShareProps,
} from '@/app/(user)/contents/[id]/result/components/Footer/Share';
import {
  ContentFooterLayout as Layout,
  ContentFooterBox,
} from '@/app/(user)/contents/[id]/result/components/Footer/styled';

function ContentFooter({ isShare, content, purchase }: ContentShareProps) {
  return (
    <Layout>
      <ContentFooterBox>
        <ContentLike content={content} />
        <ContentShare isShare={isShare} content={content} purchase={purchase} />
      </ContentFooterBox>
    </Layout>
  );
}

export default ContentFooter;
