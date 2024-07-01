import Link from 'next/link';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { fetchMainTop } from '@module/api/main';

const RecommendContentLayout = styled.article`
  box-sizing: border-box;
  width: 100%;
  margin-top: 15px;
  padding: 0 14px;
`;

const RecommendContentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 12px;
  border-radius: 20px;
  background-color: #f8f4fc;

  h4 a {
    display: flex;
    align-items: center;
    height: 51px;
    padding-left: 21px;
    background: url(${props =>
        `${props.theme.imageUrl}/common/arrow_right.webp`})
      no-repeat center right 10px;
    background-size: 7px 12px;
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.colors.black100};
  }

  ul li {
    padding: 18px 20px 15px;
    border-top: 1px solid ${props => props.theme.colors.gray100};
    line-height: 22px;

    a {
      overflow: hidden;
      font-size: 18px;
      line-height: 22px;
      color: ${props => props.theme.colors.black100};
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

function RecommendContent() {
  const { data } = useQuery(['mainTop'], fetchMainTop, {
    select: res => res.data,
    initialData: {
      data: [],
    },
  });

  return (
    <RecommendContentLayout>
      <RecommendContentBox>
        <h4>
          <Link href="/categories" prefetch={false}>
            다른 운세 보기
          </Link>
        </h4>

        <ul>
          {data.map(d => (
            <li key={d.id}>
              <Link href={`/contents/${d.id}`} prefetch={false}>
                {d.name}
              </Link>
            </li>
          ))}
        </ul>
      </RecommendContentBox>
    </RecommendContentLayout>
  );
}

export default RecommendContent;
