import React from 'react';
import SajuForm from '@/app/(user)/contents/[id]/components/Form/Saju/Form';

interface Props {
  isPartner: boolean;
}

function SajuFormContainer({ isPartner }: Props) {
  return (
    <>
      <SajuForm isUser text="사주 정보 입력" />

      {isPartner && <SajuForm isUser={false} text="상대방 사주 정보 입력" />}
    </>
  );
}

export default SajuFormContainer;
