import React from 'react';
import { ContentCategory as Layout } from '@/app/(user)/contents/[id]/components/Header/styled';
import { ContentCategoryProps } from '@/app/(user)/contents/[id]/components/Header/types';

function ContentCategory({ type, category }: ContentCategoryProps) {
  const categoryText = [type, category].filter(c => !!c).join(' > ');
  return <Layout>{categoryText}</Layout>;
}

export default ContentCategory;
