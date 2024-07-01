import styled from 'styled-components';
import { TagT } from '@module/types/common';

interface Props {
  tags: TagT[];
}

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 8px;
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27px;
  padding: 0 6px;
  background: #ffefef;
  font-size: 14px;
  font-weight: 500;
  color: #e01f27;
`;

function ListTag({ tags }: Props) {
  return (
    <Layout>
      {tags.map(tag => (
        <TagItem key={tag.id}>#{tag.name}</TagItem>
      ))}
    </Layout>
  );
}

export default ListTag;
