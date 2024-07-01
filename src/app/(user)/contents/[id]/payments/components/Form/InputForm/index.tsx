import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { ContentTypeE } from '@module/types/content';
import { numberWithCommas } from '@module/utils/number';
import {
  CloseButton,
  FormDescription,
  InfoContentName,
  InfoContentPrice,
  InfoDescription,
  InfoLogo,
  InfoTitle,
  InputFormLayout,
  DiscountPriceWrap,
  InfoContentOldPrice,
  InfoContentDiscountPriceWrap,
  InfoContentDiscountPrice,
  InfoContentDiscountPercent,
} from '@/app/(user)/contents/[id]/payments/components/Form/InputForm/styled';
import FormButton from '../Button';
import UserForm from '@/app/(user)/components/Form/UserForm';
import { InputFormProps } from '@/app/(user)/contents/[id]/payments/components/Form/InputForm/types';

function InputForm({ content, handleFormSubmit }: InputFormProps) {
  const router = useRouter();
  const {
    control,
    formState: { isValid },
  } = useFormContext();

  const logoText = `서울경제 ${
    content.type?.name === ContentTypeE.Saju ? '사주' : '타로'
  }`;

  return (
    <InputFormLayout>
      <CloseButton onClick={() => router.replace(`/contents/${content.id}`)}>
        닫기
      </CloseButton>
      <InfoTitle>결제하기</InfoTitle>
      <InfoLogo type={content.type?.name}>{logoText}</InfoLogo>
      <InfoContentName>{content.name}</InfoContentName>
      {/* <InfoContentPrice>{numberWithCommas(content.price)}원</InfoContentPrice> */}
      {content.is_discount ? (
        <DiscountPriceWrap>
          <InfoContentOldPrice>
            {numberWithCommas(content.price)}원
          </InfoContentOldPrice>
          <InfoContentDiscountPriceWrap>
            <InfoContentDiscountPercent>
              {content.discount_percent ?? 0}%
            </InfoContentDiscountPercent>
            <InfoContentDiscountPrice>
              {numberWithCommas(content.discount_price ?? content.price)}원
            </InfoContentDiscountPrice>
          </InfoContentDiscountPriceWrap>
          <InfoDescription>자세한 풀이 내용을 확인하세요.</InfoDescription>
        </DiscountPriceWrap>
      ) : (
        <>
          <InfoContentPrice>
            {numberWithCommas(content.price)}원
          </InfoContentPrice>
          <InfoDescription>자세한 풀이 내용을 확인하세요.</InfoDescription>
        </>
      )}

      <UserForm control={control} />

      <FormDescription>
        * 다시보기를 위해 정확한 정보를 입력해주세요.
      </FormDescription>

      <FormButton
        type="submit"
        isValid={isValid}
        text="결과 자세히 보기"
        onClick={() => handleFormSubmit()}
      />
    </InputFormLayout>
  );
}

export default InputForm;
