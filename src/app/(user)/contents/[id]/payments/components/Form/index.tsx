import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { useMutation } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/navigation';
import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';
import fetchPaymentHash from '@module/api/content/payment';
import useAlert from '@module/hooks/common/useAlert';
import useContentPurchase from '@module/hooks/content/useContentPurchase';
import { handleUpdatePurchaseHash } from '@module/utils/content/hash';
import usePaymentForm from '@module/hooks/content/usePaymentForm';
import useSaveUserInfo from '@module/hooks/user/useSaveUserInfo';
import useResetUserInfo from '@module/hooks/user/useResetUserInfo';
import { PaymentFormProps } from '@/app/(user)/contents/[id]/payments/components/Form/types';
import {
  mid,
  returnURL,
  ediDate,
} from '@/app/(user)/contents/[id]/payments/components/Form/constants';
import InputForm from '@/app/(user)/contents/[id]/payments/components/Form/InputForm';

const Loading = dynamic(
  () => import('@module/components/Common/Popup/Loading'),
  {
    ssr: false,
  }
);

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

function PaymentForm({ content }: PaymentFormProps) {
  const router = useRouter();
  const formRef = useRef<any>();

  const currentPrice = content.is_discount
    ? content.discount_price
    : content.price;

  const [reqReserved, setReqReserved] = useState('');
  const [signData, setSignData] = useState('');

  const { renderMessage, setAlertOptions, handleReset } = useAlert();

  const methods = usePaymentForm();
  const {
    trigger,
    getValues,
    formState: { isDirty },
    setValue,
    reset,
    watch,
  } = methods;

  const { getPurchaseRequest, purchasesMutate } = useContentPurchase({
    content,
    getValues,
    setAlertOptions,
  });

  const paymentHashMutate = useMutation(fetchPaymentHash);

  useResetUserInfo({
    setValue,
    reset,
    trigger,
  });

  useSaveUserInfo({
    isDirty,
    formValues: watch(),
  });

  useEffect(() => {
    if (!signData) return;
    nicepayStart();
  }, [signData]);

  const handleFormSubmit = () => {
    if (purchasesMutate.isLoading) return;

    const name = getValues('name');
    const pin = getValues('pin');
    const phone = getValues('phone');
    const purchaseParams = getPurchaseRequest({
      name,
      pin,
      phone,
    });

    purchasesMutate.mutate(purchaseParams, {
      onSuccess: res => {
        getPaymentHash(Number(res.data.purchase_id));
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

  const getPaymentHash = (purchaseId: number) => {
    paymentHashMutate.mutate(
      {
        name: getValues('name'),
        phone: getValues('phone'),
        pin: getValues('pin'),
        price: currentPrice,
        date: Number(ediDate),
      },
      {
        onSuccess: res => {
          handleUpdatePurchaseHash(res.data.purchase_hash);

          if (currentPrice === 0) {
            router.replace(`/contents/${content.id}/result/${purchaseId}`);
            return;
          }

          setReqReserved(`${purchaseId}|${res.data.purchase_hash}`);
          setSignData(res.data.payment_hash);
        },
        onError: () => {
          setAlertOptions({
            isOpen: true,
            description: '오류가 발생했습니다.',
            handleConfirm: handleReset,
          });
        },
      }
    );
  };

  /**
   * 나이스 페이 결제 함수
   * TODO: 추후 로직 분리
   */
  const nicepayStart = () => {
    window.nicepaySubmit = nicepaySubmit;
    window.nicepayClose = nicepayClose;

    if (isMobile) {
      formRef.current.action = 'https://web.nicepay.co.kr/v3/v3Payment.jsp';
      formRef.current.acceptCharset = 'euc-kr';
      formRef.current.submit();
    } else {
      window.goPay(formRef.current);
    }
  };

  const nicepaySubmit = () => {
    formRef.current.acceptCharset = 'utf-8';
    formRef.current.submit();
  };

  // [PC 결제창 전용]결제창 종료 함수 <<'nicepayClose()' 이름 수정 불가능>>
  const nicepayClose = () => {
    setSignData('');
    setAlertOptions({
      isOpen: true,
      description: '결제가 취소 되었습니다.',
      handleConfirm: () => {
        router.replace(`/contents/${content.id}`);
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <Layout>
        <InputForm content={content} handleFormSubmit={handleFormSubmit} />

        <form
          ref={formRef}
          name="payForm"
          method="post"
          action={returnURL}
          acceptCharset="euc-kr"
          style={{
            display: 'none',
          }}
        >
          <input type="hidden" name="PayMethod" value="CARD" />
          <input type="hidden" name="GoodsName" value={content.name} />
          {/* 상품명 - 컨텐츠 명 */}
          <input type="hidden" name="Amt" value={currentPrice} /> {/* 금액 */}
          <input type="hidden" name="MID" value={mid} /> {/* 상점아이디 */}
          <input type="hidden" name="Moid" value={content.id} />{' '}
          {/* 주문번호 */}
          <input
            type="hidden"
            name="BuyerName"
            value={methods.getValues('name')}
          />{' '}
          {/* 이름 */}
          <input type="hidden" name="BuyerEmail" value="" />
          <input
            type="hidden"
            name="BuyerTel"
            value={methods.getValues('phone')}
          />
          {/* 전화번호 */}
          <input type="hidden" name="ReturnURL" value={returnURL} />
          <input type="hidden" name="VbankExpDate" value="" />
          <input type="hidden" name="NpLang" value="KO" />
          <input type="hidden" name="GoodsCl" value="1" />
          <input type="hidden" name="TransType" value="0" />
          <input type="hidden" name="CharSet" value="utf-8" />
          <input type="hidden" name="ReqReserved" value={reqReserved} />
          <input type="hidden" name="EdiDate" value={ediDate} /> {/* 날짜 */}
          <input type="hidden" name="SignData" value={signData} /> {/* hash */}
        </form>

        {renderMessage()}
        <Loading
          isOpen={purchasesMutate.isLoading || paymentHashMutate.isLoading}
        />

        <Script src="https://web.nicepay.co.kr/v3/webstd/js/nicepay-3.0.js" />
      </Layout>
    </FormProvider>
  );
}

export default PaymentForm;
