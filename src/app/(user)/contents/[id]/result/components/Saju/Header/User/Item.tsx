import React, { useState } from 'react';
import { formatBirthedAt } from '@module/utils/date';
import { CALENDAR_TEXT } from '@module/constants/user';
import { CalendarE, GenderE } from '@module/types/user';
import Popup from '@module/components/Common/Popup';
import { UserInfoItemProps } from '@/app/(user)/contents/[id]/result/components/Saju/Header/User/types';
import {
  UserInfoItem as Layout,
  SajuInfoButton,
  PreviewSajuSectionLayout,
} from '@/app/(user)/contents/[id]/result/components/Saju/Header/User/styled';
import DetailInfo from '@/app/(user)/contents/[id]/result/components/Saju/Header/Detail';
import SajuSection from '@/app/(user)/contents/[id]/result/components/Saju/Header/Detail/SajuSection';

function UserInfoItem({ user, saju }: UserInfoItemProps) {
  const [isPopup, setIsPopup] = useState(false);

  const { name } = user;
  const gender = user.gender === GenderE.Male ? '남자' : '여자';
  const [date, time] = formatBirthedAt(user?.birthed_at);
  const calendar = user?.calendar
    ? CALENDAR_TEXT[user.calendar as CalendarE]
    : null;

  const handleSajuInfo = () => {
    setIsPopup(true);
  };

  const handleClose = () => {
    setIsPopup(false);
  };

  return (
    <>
      <Layout>
        {name}님 | {gender} | {date} {calendar} | {time}
        <SajuInfoButton type="button" onClick={handleSajuInfo}>
          사주분석 보기
        </SajuInfoButton>
      </Layout>

      {saju && (
        <PreviewSajuSectionLayout>
          <SajuSection saju={saju} />
        </PreviewSajuSectionLayout>
      )}

      <Popup isOpen={isPopup && !!saju}>
        <DetailInfo saju={saju} name={user.name} handleClose={handleClose} />
      </Popup>
    </>
  );
}

export default UserInfoItem;
