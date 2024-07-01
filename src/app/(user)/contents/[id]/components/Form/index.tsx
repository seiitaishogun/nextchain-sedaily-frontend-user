import React, { useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import classNames from 'classnames';
import { ContentTypeE } from '@module/types/content';
import { ContentDetailT } from '@module/types/content/detail';
import LayerPopup from '@module/components/Common/Popup/Layer';
import Popup from '@module/components/Common/Popup';
import { contentLikeSelector } from '@module/store/content/like';
import useUpdateContentLike from '@module/hooks/content/useUpdateContentLike';
import useAlert from '@module/hooks/common/useAlert';
import {
  AgreeDetailButton,
  AgreementBox,
  AgreementCheck,
  AgreementCheckLabel,
  AgreementLabelBox,
  ButtonLayout,
} from '@/app/(user)/contents/[id]/components/Form/Form.styled';
import TarotFormContainer from '@/app/(user)/contents/[id]/components/Form/Tarot';
import SajuFormContainer from '@/app/(user)/contents/[id]/components/Form/Saju';
import Checkbox from '@/app/(user)/components/Form/Checkbox';
import ContentPreview from '@/app/(user)/contents/[id]/components/Preview';

interface Props {
  content: ContentDetailT;
}

function ContentForm({ content }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    control,
    formState: { isValid },
  } = useFormContext();

  const { renderMessage, setAlertOptions, handleReset } = useAlert();
  const isLike = useRecoilValue(contentLikeSelector(content.id));
  const { handleUpdateLike } = useUpdateContentLike({
    content,
    setAlertOptions,
    handleReset,
    isUpdateQuery: true,
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const renderForm = useCallback(() => {
    switch (content.type.name) {
      case ContentTypeE.Saju:
        return <SajuFormContainer isPartner={content.is_partner} />;
      case ContentTypeE.Tarot:
        return (
          <TarotFormContainer
            content={content}
            tarot={content.tarot}
            maxCardCount={content.tarot_count || 0}
            isPartner={content.is_partner}
          />
        );
      default:
        return null;
    }
  }, [content]);

  const getButtonText = useCallback(() => {
    if (content.type.name === ContentTypeE.Saju) {
      if (content.price > 0) {
        return '사주 결과보기';
      }
      return '무료 사주 보기';
    }
    if (content.type.name === ContentTypeE.Tarot) {
      if (content.price > 0) {
        return '타로 결과보기';
      }
      return '무료 타로 보기';
    }
    return '결과보기';
  }, [content.type, content.price]);

  const buttonText = getButtonText();

  return (
    <>
      <ContentPreview content={content} />
      {renderForm()}

      <AgreementCheck>
        <AgreementLabelBox>
          <Checkbox name="isAgree" control={control} />
          <AgreementCheckLabel htmlFor="isAgree">
            [필수] 개인정보 처리 방침에 동의합니다.
          </AgreementCheckLabel>
        </AgreementLabelBox>
        <AgreeDetailButton type="button" onClick={handleOpen}>
          전문보기
        </AgreeDetailButton>

        <Popup isOpen={isOpen} handleClose={handleClose}>
          <LayerPopup title="개인정보 처리 방침" handleClose={handleClose}>
            <AgreementBox>
              개인정보 수집·이용 동의서
              <br />
              <br />
              개인정보 수집 이용 목적은 다음과 같습니다. 내용을 자세히 읽어 보신
              후 동의 여부를 결정하여 주시기 바랍니다.
              <br />
              <br />
              수집목적: 운세 콘텐츠 제공 및 다시보기, 고객 지원
              <br />
              수집항목: 이름, 성별, 생년월일, 태어난시간, 결제기록,
              구매내역(콘텐츠)
              <br />
              보유기간: 관련 법령에 따른 기간까지
              <br />
              <br />
              귀하는 위와 같이 개인정보를 수집·이용하는데 동의를 거부할 권리가
              있습니다. 필수 수집 항목에 대한 동의를 거절하는 경우 서비스 이용이
              제한 될 수 있습니다.
            </AgreementBox>
          </LayerPopup>
        </Popup>
      </AgreementCheck>

      <ButtonLayout $isValid={isValid}>
        <div className="button-box">
          <button
            type="button"
            className={classNames('btn-like', { active: isLike })}
            onClick={handleUpdateLike}
          >
            좋아요
          </button>
          <button type="submit" disabled={!isValid}>
            <span>{buttonText}</span>
          </button>
        </div>
      </ButtonLayout>

      {renderMessage()}
    </>
  );
}

export default ContentForm;
