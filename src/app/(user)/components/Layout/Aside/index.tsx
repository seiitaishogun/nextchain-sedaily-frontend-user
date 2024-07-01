import React from 'react';
import { Drawer } from '@mui/material';
import useCategories from '@module/hooks/common/useCategories';
import {
  CloseButton,
  Layout,
} from '@/app/(user)/components/Layout/Aside/Aside.styled';
import AsideMenu from '@/app/(user)/components/Layout/Aside/Menu';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

function Menu({ isOpen, setIsOpen }: Props) {
  const categories = useCategories() || [];
  const categoryMenu = categories.map(category => ({
    text: category.name,
    link: `/categories/${category.id}`,
  }));

  const menu = [
    {
      text: '운세 다시보기',
      link: '/contents/replays',
    },
    {
      text: '운세 전체보기',
      link: '/contents',
    },
    ...categoryMenu,
    {
      text: '카카오톡 문의하기',
      link: 'http://pf.kakao.com/_ymuIC/chat',
    },
  ];

  if (!isOpen) return null;

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      variant="temporary"
      transitionDuration={0}
      sx={{
        '& .MuiDrawer-root': {
          position: 'absolute',
        },
        '& .MuiPaper-root': {
          position: 'absolute',
          // left: '50%',
          // marginLeft: '-195px',
        },
      }}
    >
      <Layout>
        <CloseButton onClick={() => setIsOpen(false)} />
        <AsideMenu menu={menu} setIsOpen={setIsOpen} />
      </Layout>
    </Drawer>
  );
}

export default Menu;
