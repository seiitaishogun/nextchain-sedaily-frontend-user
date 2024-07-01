import styled from 'styled-components';
import List from '@/app/(user)/components/List';
import { MAIN_GENERAL_DATA } from '@/app/(user)/data/main';
import LinkTitle from '@/app/(user)/components/Title/LinkTitle';
import SummaryList from '@/app/(user)/components/List/SummaryList';

const Layout = styled.article`
  padding: 20px 0;
  border-top: 1px solid ${props => props.theme.colors.borderGray};

  .list-layout {
    padding-bottom: 10px;
  }
`;

function MainGeneral() {
  /**
   const { data } = useQuery(['mainGeneral'], fetchMainGeneral, {
   select: res => res.data,
   suspense: true,
   });
   */

  const firstData = (MAIN_GENERAL_DATA || []).slice(0, 1);
  const otherData = (MAIN_GENERAL_DATA || []).slice(1);
  return (
    <Layout>
      <LinkTitle text="나의 타고난 사주" href="/contents" />
      {firstData && <List type="tag" data={firstData} />}
      <SummaryList data={otherData} />
    </Layout>
  );
}

export default MainGeneral;
