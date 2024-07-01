import React from 'react';
import Image from 'next/image';
import { DEFAULT_THUMBNAIL_LARGE_PATH } from '@/app/(user)/constants/image';
import {
  ContentBanner,
  ContentDescription,
  ContentHeaderLayout as Layout,
  ContentName,
  ContentCategoryBox,
} from '@/app/(user)/contents/[id]/components/Header/styled';
import ContentCategory from '@/app/(user)/contents/[id]/components/Header/Category';
import ContentCount from '@/app/(user)/contents/[id]/components/Header/Count';
import { ContentHeaderProps } from '@/app/(user)/contents/[id]/components/Header/types';

function ContentHeader({ content }: ContentHeaderProps) {
  return (
    <Layout>
      <ContentCategoryBox>
        <ContentCategory
          type={content.type.description}
          category={content.category?.name}
        />

        <ContentCount content={content} />
      </ContentCategoryBox>

      <ContentBanner>
        <Image
          src={content.banner_mobile || DEFAULT_THUMBNAIL_LARGE_PATH}
          alt=""
          fill
        />
      </ContentBanner>

      <ContentName>{content.name}</ContentName>

      <ContentDescription
        dangerouslySetInnerHTML={{ __html: content.contents }}
      />
    </Layout>
  );
}

export default ContentHeader;
