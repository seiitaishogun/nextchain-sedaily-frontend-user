'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ContentTypeE } from '@module/types/content';
import { PurchaseT } from '@module/types/content/result';
import { CalendarE, GenderE, MaritalE } from '@module/types/user';
import { ContentDetailT } from '@module/types/content/detail';
import LayerPopup from '@module/components/Common/Popup/Layer';
import {
  SampleBox,
  SampleLayout,
} from '@/app/(user)/contents/[id]/components/Sample/styled';
import ContentHeader from '@/app/(user)/contents/[id]/result/components/Saju/Header';

interface Props {
  content: ContentDetailT;
  handleClose: () => void;
}

function ContentSampleLayout({ content, handleClose }: Props) {
  const renderResult = () => {
    if (content.type.name === ContentTypeE.Saju) {
      const purchase = {
        name: '보라',
        gender: GenderE.Female,
        marital: MaritalE.Single,
        birthed_at: '1990-01-01 00:00:00',
        calendar: CalendarE.Solar,
      } as unknown as PurchaseT;

      return <ContentHeader content={content} purchase={purchase} saju={[]} />;
    }

    return null;
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <SampleLayout>
      <LayerPopup title="예시보기" handleClose={handleClose}>
        {renderResult()}
        <SampleBox>
          {content.sample_mobile && <Image src={content.sample_mobile} alt="" fill />}
        </SampleBox>
      </LayerPopup>
    </SampleLayout>
  );
}

export default ContentSampleLayout;
