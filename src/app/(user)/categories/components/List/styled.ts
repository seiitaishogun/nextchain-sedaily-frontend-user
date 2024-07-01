import styled from 'styled-components';
import {
  ListDescription,
  ListName,
  ListViewCount,
} from '@/app/(user)/components/List/styled';

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${props => props.theme.colors.gray100};
`;

const ListItemLayout = styled.div`
  padding: 15px 0;
  border-top: 1px solid ${props => props.theme.colors.gray100};

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const ListItemDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: calc(100% - 112px);

  ${ListName} {
    margin-top: 0;
  }

  ${ListDescription} {
    width: 100%;
    margin-top: 7px !important;
    padding: 0;
  }

  ${ListViewCount} {
    margin-top: 8px !important;
  }
`;

export { ListLayout, ListItemLayout, ListItemDetailBox };
