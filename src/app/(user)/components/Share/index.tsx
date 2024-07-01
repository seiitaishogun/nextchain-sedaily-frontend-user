import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { Modal } from '@mui/material';
import { isIOS } from 'react-device-detect';
import Snackbar from '@module/components/Common/Snackbar';
import { KakaoShareOptions } from '@module/types/common/share';
import {
  Layout,
  ShareCloseButton,
  ShareContainer,
  ShareSocial,
  ShareTitle,
} from '@/app/(user)/components/Share/Share.styled';
import ShareLink from '@/app/(user)/components/Share/Term/Link';
import ShareKakao from '@/app/(user)/components/Share/Term/Kakao';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  url: string;
  kakaoOptions: KakaoShareOptions;
}

function Share({ isOpen, setIsOpen, url, kakaoOptions }: Props) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handlePopupClose = useCallback(() => setIsOpen(false), []);

  return (
    // TODO: Popup 컴포넌트 스타일 수정후 연동
    <>
      <Modal open={isOpen} onClose={handlePopupClose}>
        <Layout>
          <ShareCloseButton onClick={handlePopupClose}>
            팝업창 닫기
          </ShareCloseButton>
          <ShareContainer>
            <ShareTitle>친구에게 공유하기</ShareTitle>
            <ShareSocial>
              <ShareKakao url={url} setIsOpen={setIsOpen} {...kakaoOptions} />
              <ShareLink
                url={url}
                setOpenSnackbar={setOpenSnackbar}
                setIsOpen={setIsOpen}
              />
            </ShareSocial>
          </ShareContainer>
        </Layout>
      </Modal>

      {!isIOS && (
        <Snackbar
          isOpen={openSnackbar}
          setIsOpen={setOpenSnackbar}
          message="클립보드에 링크가 복사되었어요."
        />
      )}
    </>
  );
}

export default Share;
