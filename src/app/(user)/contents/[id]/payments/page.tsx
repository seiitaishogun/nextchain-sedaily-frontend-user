'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import { Modal } from '@mui/material';
import useAlert from '@module/hooks/common/useAlert';
import useContentDetailData from '@module/hooks/content/useContentDetailData';
import { ContentTypeE } from '@module/types/content';
import { PurchaseT } from '@module/types/content/result';
import { contentFormSelector } from '@module/store/content/form';
import { getUserRequest } from '@module/utils/content/form';
import useSaveContentInfo from '@module/hooks/content/useSaveContentInfo';
import { PaddingBox } from '@/app/(user)/contents/[id]/result/components/Result.styled';
import PaymentForm from '@/app/(user)/contents/[id]/payments/components/Form';
import { ContentPaymentLayout as Layout } from '@/app/(user)/contents/[id]/payments/styled';
import ContentHeader from '@/app/(user)/contents/[id]/result/components/Saju/Header';
import { SampleBox } from '@/app/(user)/contents/[id]/components/Sample/styled';

const Loading = dynamic(
  () => import('@module/components/Common/Popup/Loading'),
  {
    ssr: false,
  }
);

function ContentPreview() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id || 0);
  const { renderMessage, setAlertOptions } = useAlert();
  const {
    data: content,
    isLoading,
    isFetched,
    isError,
  } = useContentDetailData({
    id,
    setAlertOptions,
  });
  const contentForm = useRecoilValue(contentFormSelector(content.id));

  useSaveContentInfo({ content });

  const renderResult = () => {
    if (content.type.name === ContentTypeE.Saju) {
      const { name, gender, marital, birthed_at, calendar } = getUserRequest(
        contentForm?.user
      );
      const purchase = {
        name,
        gender,
        marital,
        birthed_at,
        calendar,
      } as unknown as PurchaseT;

      return (
        <PaddingBox>
          <ContentHeader content={content} purchase={purchase} saju={[]} />
        </PaddingBox>
      );
    }
    return null;
  };

  useEffect(() => {
    if (!contentForm?.name) {
      setAlertOptions({
        isOpen: true,
        description:
          '결제를 진행중 오류가 발생 했습니다. 잠시 후 다시 시도해 주세요.',
        handleConfirm: () => router.replace(`/contents/${id}`),
      });
    }

    return () => {
      const nicepayLayer = document.getElementById('nice_layer');
      const nicepayBgLayout = document.getElementById('bg_layer');

      if (nicepayLayer) nicepayLayer.remove();
      if (nicepayBgLayout) nicepayBgLayout.remove();
    };
  }, []);

  if (isLoading || !isFetched) return <Loading isOpen />;
  if (isError) return renderMessage();

  return (
    <Layout>
      {renderResult()}

      <SampleBox>
        {content.sample_mobile && <Image src={content.sample_mobile} alt="" fill />}
      </SampleBox>

      <Modal open onClose={() => {}}>
        <PaymentForm content={content} />
      </Modal>
    </Layout>
  );
}

export default ContentPreview;
