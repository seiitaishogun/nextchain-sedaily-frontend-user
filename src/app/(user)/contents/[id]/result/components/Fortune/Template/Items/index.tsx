import React from 'react';
import styled from 'styled-components';
import { ChildrenDataT } from '@module/types/content/fortune';

interface Props {
  items: ChildrenDataT[];
}

const Layout = styled.div<{ $itemCount: number }>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(${props => props.$itemCount}, 1fr);
  width: 100%;
  padding: 0;
  box-sizing: border-box;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h5 {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${props => props.theme.colors.placeholder};
  }

  p {
    margin-top: 12px;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: ${props => props.theme.colors.black};
  }
`;

function Items({ items }: Props) {
  return (
    <Layout $itemCount={items.length}>
      {items.map(item => (
        <div key={item.id}>
          <h5 dangerouslySetInnerHTML={{ __html: item.name || '' }} />
          <p dangerouslySetInnerHTML={{ __html: item.contents || '' }} />
        </div>
      ))}
    </Layout>
  );
}

export default Items;
