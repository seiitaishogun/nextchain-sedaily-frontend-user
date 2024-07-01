import { Dispatch, SetStateAction, useCallback } from 'react';
import copy from 'copy-to-clipboard';
import { ShareSocialItem } from '@/app/(user)/components/Share/Share.styled';

interface Props {
  url: string;
  setOpenSnackbar: Dispatch<SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function ShareLink({ url, setOpenSnackbar, setIsOpen }: Props) {
  const handleCopy = useCallback(() => {
    copy(url);
    setOpenSnackbar(true);
    setIsOpen(false);
  }, [url]);

  return <ShareSocialItem className="btn_url" onClick={handleCopy} />;
}

export default ShareLink;
