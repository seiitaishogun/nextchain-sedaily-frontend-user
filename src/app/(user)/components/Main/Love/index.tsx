import styled from 'styled-components';
import CategoryRelatedList from './components/RelatedList/CategoryRelatedList';

const Layout = styled.article`
  padding: 20px 0;
  border-top: 1px solid ${props => props.theme.colors.borderGray};
`;

function MainLove() {
  /**
   const { data } = useQuery(['mainLove'], fetchMainLove, {
   select: res => res.data,
   suspense: true,
   });
   */

  return (
    <Layout>
      <CategoryRelatedList />
    </Layout>
  );
}

export default MainLove;
