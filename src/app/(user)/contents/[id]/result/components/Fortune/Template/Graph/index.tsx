import styled from 'styled-components';
import { ChildrenDataT } from '@module/types/content/fortune';

interface Props {
  items: ChildrenDataT[];
}

const Layout = styled.div`
  position: relative;
  box-sizing: border-box;
`;

const RightBox = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  justify-content: space-between;
  align-items: end;
  position: relative;
  min-height: 164px;
  padding-bottom: 33px;
  background: repeating-linear-gradient(
    ${props => props.theme.colors.white} 1px,
    ${props => props.theme.colors.white} 32px,
    ${props => props.theme.colors.gray200} 34px
  );
`;

const GraphScore = styled.div<{ $position: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${props => props.$position}px;
  box-sizing: border-box;
  width: 38px;
  height: 26px;
  border: 2px solid #e24a70;
  border-radius: 14px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
  font-size: 15px;
  font-weight: bold;
`;

const GraphBar = styled.div<{ height: number; $isMaxScore: boolean }>`
  width: 8px;
  height: ${props => props.height}px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const GraphItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: ${props => props.theme.colors.placeholder};
  text-align: center;

  &:nth-child(6n - 5) {
    ${GraphScore} {
      color: #e24a70;
    }

    ${GraphBar} {
      background-color: #e24a70;
    }
  }

  &:nth-child(6n - 4) {
    ${GraphScore} {
      color: #ff884a;
      border-color: #ff884a;
    }

    ${GraphBar} {
      background-color: #ff884a;
    }
  }

  &:nth-child(6n - 3) {
    ${GraphScore} {
      color: #ffdc4a;
      border-color: #ffdc4a;
    }

    ${GraphBar} {
      background-color: #ffdc4a;
    }
  }

  &:nth-child(6n - 2) {
    ${GraphScore} {
      color: #61e261;
      border-color: #61e261;
    }

    ${GraphBar} {
      background-color: #61e261;
    }
  }

  &:nth-child(6n - 1) {
    ${GraphScore} {
      color: #5fb5eb;
      border-color: #5fb5eb;
    }

    ${GraphBar} {
      background-color: #5fb5eb;
    }
  }

  &:nth-child(6n) {
    ${GraphScore} {
      color: #9981ff;
      border-color: #9981ff;
    }

    ${GraphBar} {
      background-color: #9981ff;
    }
  }
`;

const GraphName = styled.div`
  position: absolute;
  bottom: 0;
  line-height: 26px;
  margin-top: 21px;
  font-size: 18px;
  color: #a0a0a0;
`;

function Graph({ items }: Props) {
  const maxScoreId = items.sort(
    (a, b) => Number(b.contents) - Number(a.contents)
  )[0].id;

  const getGraphBarHeight = (score: number) => {
    const height = (score / 100) * 164;
    return height > 164 ? 164 : height;
  };

  const getGraphScorePosition = (score: number) =>
    164 - getGraphBarHeight(score) + 20;

  return (
    <Layout>
      <RightBox count={items.length}>
        {items.map(item => (
          <GraphItem key={item.id}>
            <GraphScore
              $position={getGraphScorePosition(Number(item.contents) || 0)}
            >
              {item.contents}
            </GraphScore>
            <GraphBar
              height={getGraphBarHeight(Number(item.contents) || 0)}
              $isMaxScore={item.id === maxScoreId}
            />
            <GraphName>{item.name}</GraphName>
          </GraphItem>
        ))}
      </RightBox>
    </Layout>
  );
}

export default Graph;
