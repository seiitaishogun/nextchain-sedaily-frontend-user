import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { fetchContentReplayHash } from '@module/api/content/replay';
import { handleUpdatePurchaseHash } from '@module/utils/content/hash';
import useAlert from '@module/hooks/common/useAlert';
import { UserInfoT } from '@module/types/user';
import usePaymentForm from '@module/hooks/content/usePaymentForm';
import useResetUserInfo from '@module/hooks/user/useResetUserInfo';
import useSaveUserInfo from '@module/hooks/user/useSaveUserInfo';
import UserForm from '@/app/(user)/components/Form/UserForm';
import FormButton from '@/app/(user)/contents/[id]/payments/components/Form/Button';

const Loading = dynamic(
  () => import('@module/components/Common/Popup/Loading'),
  {
    ssr: false,
  }
);

const Layout = styled.div`
  margin-top: 20px;
`;

function ReplayForm() {
  const router = useRouter();
  const { renderMessage, setAlertOptions, handleReset } = useAlert();
  const { mutate, isLoading, isSuccess } = useMutation(
    ['contentReplayHash'],
    fetchContentReplayHash
  );

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
    setValue,
    reset,
    trigger,
    watch,
  } = usePaymentForm();

  useResetUserInfo({
    setValue,
    reset,
    trigger,
  });

  useSaveUserInfo({
    isDirty,
    formValues: watch(),
  });

  const handleFormSubmit = (formData: UserInfoT) => {
    if (isLoading) return;

    mutate(formData, {
      onSuccess: res => {
        handleUpdatePurchaseHash(res.data.purchase_hash);
        router.push(`/contents/replays/lists`);
      },
      onError: () => {
        setAlertOptions({
          isOpen: true,
          description: '오류가 발생했습니다.',
          handleConfirm: handleReset,
        });
      },
    });
  };

  return (
    <>
      <Layout>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <UserForm control={control} />
          <FormButton type="submit" isValid={isValid} />
        </form>
      </Layout>

      {isLoading && isSuccess && <Loading isOpen />}
      {renderMessage()}
    </>
  );
}

export default ReplayForm;
