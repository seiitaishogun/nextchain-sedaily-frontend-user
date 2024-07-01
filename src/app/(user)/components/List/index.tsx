import styled from 'styled-components';
import OrderItem from '@/app/(user)/components/List/Item/OrderItem';
import DescriptionItem from '@/app/(user)/components/List/Item/DescriptionItem';
import { MainProps } from '@/app/(user)/components/Main/types';
import TagItem from '@/app/(user)/components/List/Item/TagItem';

interface ListProps extends MainProps {
  type: 'tag' | 'description' | 'order';
}

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

function List({ type, data }: ListProps) {
  const renderListItem = () => {
    switch (type) {
      case 'order':
        return data.map((d, i) => {
          const order = i + 1;
          return <OrderItem key={d.id} data={d} order={order} />;
        });
      case 'description':
        return data.map(d => <DescriptionItem key={d.id} data={d} />);
      case 'tag':
        return data.map(d => <TagItem key={d.id} data={d} />);
      default:
        return null;
    }
  };

  const listItems = renderListItem();

  return <ListLayout className="list-layout">{listItems}</ListLayout>;
}

export default List;
