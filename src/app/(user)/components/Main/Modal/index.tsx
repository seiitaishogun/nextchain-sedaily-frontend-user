import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Modal } from '@mui/material';
import {
  Layout,
  ModalContent,
  OptionButton,
  HideOneDay,
  BottomRow,
} from './DiscountModal.styled';
import modalInformation from './ModalInformation';

function DiscountModal() {
  const info = modalInformation;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handlePopupClose = () => {
    setIsOpen(false);
  };

  const handleHideDuringDay = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const enableTimeStamp = tomorrow.setHours(0, 0, 0, 0);
    localStorage.setItem('hiddenTime', enableTimeStamp.toString());
    handlePopupClose();
  };

  function checkIfModalHidden() {
    const now = new Date().getTime();
    const t = localStorage.getItem('hiddenTime');
    if (t && now <= Number(t)) return;
    localStorage.removeItem('hiddenTime');
    setIsOpen(true);
  }

  const onImageClick = () => {
    router.push(info.modalURLPath);
  };

  const isWithinRange = () => {
    const currentDate = new Date();
    if (process.env.APP_ENV === 'development' && info.alwaysShowOnDev)
      return true;
    return currentDate >= info.startDate && currentDate <= info.endDate;
  };

  useEffect(() => {
    if (isWithinRange()) {
      checkIfModalHidden();
    }
  }, []);

  return (
    <Modal
      open={isOpen}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Layout>
        <OptionButton>
          <HideOneDay onClick={handleHideDuringDay}>
            오늘 하루 보지 않기
          </HideOneDay>
        </OptionButton>
        <ModalContent>
          <Image
            src={info.modalImageURL}
            alt="sedailymodal"
            layout="fill"
            onClick={onImageClick}
          />
        </ModalContent>
        <BottomRow onClick={handlePopupClose}>닫기</BottomRow>
      </Layout>
    </Modal>
  );
}

export default DiscountModal;
