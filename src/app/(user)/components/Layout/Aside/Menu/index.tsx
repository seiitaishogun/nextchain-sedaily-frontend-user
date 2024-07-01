import React from 'react';
import Link from 'next/link';
import { MenuList } from '@/app/(user)/components/Layout/Aside/Aside.styled';

interface Props {
  menu: {
    text: string;
    link: string;
  }[];
  setIsOpen: React.Dispatch<boolean>;
}

function Aside({ menu, setIsOpen }: Props) {
  return (
    <MenuList>
      {menu.map(({ text, link }) => (
        <li key={text}>
          <Link
            href={link || '/'}
            prefetch={false}
            target={link?.includes('http') ? '_blank' : undefined}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {text}
          </Link>
        </li>
      ))}
    </MenuList>
  );
}

export default Aside;
