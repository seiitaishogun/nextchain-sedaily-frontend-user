import styled from 'styled-components';
import useContentList from '@module/hooks/content/useContentList';
import LinkTitle from '@/app/(user)/components/Title/LinkTitle';
import OrderItem from './OrderItem';

const Layout = styled.article`
  padding: 20px 0;
`;

function MainTop() {
  const topItems = useContentList({ limit: 5, position: 2 });

  return (
    <Layout>
      <LinkTitle text="오늘 많이 봤어요" href="/contents" />
      {topItems.data.map((d, index) => (
        <OrderItem data={d} order={index + 1} />
      ))}
    </Layout>
  );
}

export default MainTop;
