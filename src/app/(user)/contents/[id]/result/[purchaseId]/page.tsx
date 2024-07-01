'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { getCookie } from 'cookies-next';
import { formatContentResultData } from '@module/utils/content/result';
import { fetchContentResult } from '@module/api/content';
import useAlert from '@module/hooks/common/useAlert';
import { USER_PURCHASE_HASH_KEY } from '@module/constants/user/hash';
import useSaveContentInfo from '@module/hooks/content/useSaveContentInfo';
import { ContentDetailT } from '@module/types/content/detail';
import Result from '@/app/(user)/contents/[id]/result/components';

const Loading = dynamic(
  () => import('@module/components/Common/Popup/Loading'),
  {
    ssr: false,
  }
);

function ContentResult() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const purchasesId = Number(params.purchaseId || 0);
  const share_code = searchParams.get('share_code') || undefined;
  const purchase_hash =
    (getCookie(USER_PURCHASE_HASH_KEY) || '').toString() || undefined;

  const [isShare, setIsShare] = useState(false);
  const { renderMessage, setAlertOptions } = useAlert();
  const { data, isLoading, isFetched, isError } = useQuery(
    ['contentResult', purchasesId],
    () =>
      fetchContentResult({
        id: purchasesId,
        share_code,
        purchase_hash,
      }),
    {
      enabled: !!purchasesId,
      select: res => formatContentResultData(res.data),
      onSuccess: () => {
        if (share_code) setIsShare(true);
      },
      onError: (err: any) => {
        let message = '오류가 발생했습니다. 다시 시도해주세요.';
        const { status } = err.response;

        if (status === 403) {
          message = '다시보기 기간이 만료되었습니다.';
        } else if (status === 404) {
          if (share_code) {
            message = '공유하기 링크가 잘못되었습니다.';
          } else {
            message = '본인이 구매한 콘텐츠만 이용가능합니다.';
          }
        }

        setAlertOptions({
          isOpen: true,
          description: message,
          handleConfirm: () => {
            router.back();
          },
        });
      },
    }
  );

  useSaveContentInfo({ content: data?.content as ContentDetailT });

  if (isLoading || !isFetched) return <Loading isOpen />;
  if (isError) return renderMessage();

  return <Result data={data} isShare={isShare} />;
}

export default ContentResult;
