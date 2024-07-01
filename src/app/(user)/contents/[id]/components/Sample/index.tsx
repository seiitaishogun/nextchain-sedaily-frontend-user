import React, { useState } from 'react';
import Popup from '@module/components/Common/Popup';
import { ContentDetailT } from '@module/types/content/detail';
import {
  ContentPreviewButton,
  ContentVariety,
} from '@/app/(user)/contents/[id]/components/Header/styled';
import ContentSampleLayout from '@/app/(user)/contents/[id]/components/Sample/Layout';

interface Props {
  content: ContentDetailT;
}

function ContentSample({ content }: Props) {
  const [isPopup, setIsPopup] = useState(false);

  const handleOpen = () => {
    setIsPopup(true);
  };

  const handleClose = () => {
    setIsPopup(false);
  };
  return (
    <ContentVariety>
      {content.sample_mobile ? (
        <>
          <ContentPreviewButton type="button" onClick={handleOpen}>
            결과 예시 보기
          </ContentPreviewButton>

          <Popup isOpen={isPopup}>
            <ContentSampleLayout content={content} handleClose={handleClose} />
          </Popup>
        </>
      ) : (
        <div />
      )}
    </ContentVariety>
  );
}

export default ContentSample;
