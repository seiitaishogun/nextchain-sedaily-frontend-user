import React from 'react';
import styled from 'styled-components';
import { ChildrenDataT } from '@module/types/content/fortune';

interface Props {
  items: ChildrenDataT[];
}

const Layout = styled.div<{ $itemCount: number }>`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, auto);
  gap: 12px 24px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 20px !important;

  .score-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > div {
      line-height: 24px;
    }

    > div:first-child {
      display: flex;
      justify-content: space-between;
      min-width: 60px;
      margin-right: 12px;
      font-size: 16px;
      font-weight: normal;
      color: ${props => props.theme.colors.placeholder};
    }

    > div:last-child {
      font-size: 20px;
      font-weight: bold;
      color: ${props => props.theme.colors.black};
    }
  }
`;

function ScoreItems({ items }: Props) {
  const formatName = (name: string | null) => {
    if (!name) return '';
    return name
      .split('')
      .map(n => `<span>${n}</span>`)
      .join('');
  };

  return (
    <Layout $itemCount={items.length}>
      {items.map(item => (
        <div className="score-item" key={item.id}>
          <div dangerouslySetInnerHTML={{ __html: formatName(item.name) }} />
          <div dangerouslySetInnerHTML={{ __html: `${item.summary}점` }} />
        </div>
      ))}
    </Layout>
  );
}

export default ScoreItems;
