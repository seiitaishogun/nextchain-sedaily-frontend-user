'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import useAlert from '@module/hooks/common/useAlert';
import withContentForm from '@module/hoc/content/withContentForm';
import useContentDetailData from '@module/hooks/content/useContentDetailData';
import useMounted from '@module/hooks/common/useMounted';
import useSaveContentInfo from '@module/hooks/content/useSaveContentInfo';
import ContentForm from '@/app/(user)/contents/[id]/components/Form';
import ContentHeader from '@/app/(user)/contents/[id]/components/Header';
import RelatedContent from './components/RelatedContent';

const Loading = dynamic(
  () => import('@module/components/Common/Popup/Loading'),
  {
    ssr: false,
  }
);

const Layout = styled.div`
  padding: 20px 15px;
`;

const Form = withContentForm(ContentForm);

function ContentDetailPage() {
  const params = useParams();
  const { renderMessage, setAlertOptions } = useAlert();
  const mounted = useMounted();
  const id = Number(params.id || 0);

  const {
    data: contentData,
    isLoading,
    isFetched,
    isError,
  } = useContentDetailData({
    id,
    setAlertOptions,
  });

  useSaveContentInfo({ content: contentData });

  if (isLoading || !isFetched || !mounted) return <Loading isOpen />;
  if (isError) return renderMessage();

  return (
    <Layout>
      <ContentHeader content={contentData} />
      <Form content={contentData} />
      {/* <ContentFeedback /> */}
      <RelatedContent content={contentData} />
    </Layout>
  );
}

export default ContentDetailPage;
