import styled from 'styled-components';
import React, { useMemo } from 'react';
import { ParentT } from '@module/types/content/fortune';

interface Props {
  parents: ParentT[];
}

const TitleNavigationLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 40px;
  padding: 10px 8px;
  border-radius: 20px;
  background-color: #f8f8f8;
`;

const TitleNavigationList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${props => props.theme.colors.placeholder};
  grid-gap: 1px;
`;

const TitleNavigationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  overflow: hidden;

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 12px 0;
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;
    color: ${props => props.theme.colors.black100};
  }
`;

function TitleNavigation({ parents }: Props) {
  const parentNames = useMemo(
    () =>
      parents
        .filter(p => !!p.name)
        .map(p => ({
          id: p.id,
          name: p.name,
        })),
    [parents]
  );
  const handleClick = (e: React.MouseEvent<HTMLElement> | any) => {
    e.preventDefault();

    try {
      const id = e.currentTarget.href.split('#')[1];
      const target = document.getElementById(`${id}`) as any;
      const position = (target.scrollTop || target.offsetTop) - 95;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    } catch {
      // console.info('error');
    }
  };

  if (parentNames.length === 0) return null;

  return (
    <TitleNavigationLayout>
      <TitleNavigationList>
        {parentNames.map(item => (
          <TitleNavigationItem key={item.id}>
            <a href={`#parent-title-${item.id}`} onClick={handleClick}>
              {item.name}
            </a>
          </TitleNavigationItem>
        ))}

        {parentNames.length % 2 === 1 && <TitleNavigationItem />}
      </TitleNavigationList>
    </TitleNavigationLayout>
  );
}

export default TitleNavigation;
