import styled from 'styled-components';
import useContentList from '@module/hooks/content/useContentList';
import DescriptionItem from './DescriptionItem';

const Layout = styled.article`
  margin: 0 -15px;
  padding: 20px 15px;
  background-color: #fafafa;
`;

function MainHealth() {
  const healthData = useContentList({ limit: 1, position: 1 });
  return (
    <Layout>
      {healthData.data.map(d => (
        <DescriptionItem key={d.id} data={d} />
      ))}
    </Layout>
  );
}

export default MainHealth;
