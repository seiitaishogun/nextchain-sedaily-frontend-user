import styled from 'styled-components';
import useContentList from '@module/hooks/content/useContentList';
import MoneySection from '@/app/(user)/components/Main/Money/Section';
import SummaryList from '@/app/(user)/components/List/SummaryList';
import { MAIN_MONEY_TOP } from '@/app/(user)/data/main';

const Layout = styled.article`
  // padding-bottom: 55px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.borderGray};
`;

function MainMoney() {
  /*
  const { data } = useQuery(['mainMoney'], fetchMainMoney, {
    select: res => res.data,
    suspense: true,
  });
   */

  const firstData = (MAIN_MONEY_TOP || [])[0];
  const moneyData = useContentList({ limit: 2, position: 3 });

  return (
    <Layout>
      {firstData && <MoneySection data={firstData} />}
      <SummaryList size="large" data={moneyData.data} />
    </Layout>
  );
}

export default MainMoney;
