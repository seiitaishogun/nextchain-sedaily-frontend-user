import styled from 'styled-components';
import TodayList from '@/app/(user)/components/Main/Today/List';
import { TODAY_DATA } from '@/app/(user)/data/main';

const Layout = styled.article`
  overflow: hidden;
  margin: 0 -15px;
  padding: 25px 0;
  background: #636057;

  h4 {
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
      color: #fff;
    }

    span:first-child {
      font-size: 18px;
      font-weight: normal;
      line-height: 23px;
    }

    span:last-child {
      margin-top: 8px;
      font-size: 26px;
      font-weight: bold;
      line-height: 35px;
    }
  }
`;

function MainToday() {
  /**
   const { data } = useQuery(['mainToday'], fetchMainToday, {
   select: res => res.data,
   suspense: true,
   });
   */

  return (
    <Layout>
      <h4>
        <span>서울경제</span>
        <span>오늘의 운세</span>
      </h4>

      <TodayList data={TODAY_DATA} />
    </Layout>
  );
}

export default MainToday;
