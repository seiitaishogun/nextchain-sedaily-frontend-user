'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useAlert from '@module/hooks/common/useAlert';
import useDataCollection from '@module/hooks/common/useDataCollection';

function ContentsCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { renderMessage, setAlertOptions } = useAlert();
  const { handleContentPurchaseEvent } = useDataCollection();

  useEffect(() => {
    const code = Number(searchParams.get('code') || 0);
    const contentId = searchParams.get('content_id');

    if (code === 200) {
      const content_id = searchParams.get('content_id');
      const content_category = searchParams.get('content_category');
      const content_name = searchParams.get('content_name');
      const content_price = searchParams.get('content_price');
      const data = {
        purchase: {
          id: searchParams.get('purchase_id'),
        },
        content: {
          id: content_id,
          category: {
            name: content_category || '',
          },
          name: content_name,
          price: Number(content_price || 0),
        },
      };
      handleContentPurchaseEvent(data);

      const purchase_id = searchParams.get('purchase_id');
      router.replace(`/contents/${content_id}/result/${purchase_id}`);
    } else {
      const message = searchParams.get('message') || '오류가 발생 했습니다.';

      setAlertOptions({
        isOpen: true,
        description: message,
        handleConfirm: () => {
          router.replace(`/contents/${contentId}`);
        },
      });
    }
  }, []);

  return <>{renderMessage()}</>;
}

export default ContentsCallback;
