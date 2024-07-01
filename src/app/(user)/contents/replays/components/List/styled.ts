import styled from 'styled-components';
import { ListDescription, ListName } from '@/app/(user)/components/List/styled';

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${props => props.theme.colors.gray100};
`;

const ListItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 16px 0;
  border-top: 1px solid ${props => props.theme.colors.gray100};

  ${ListName} {
    margin-top: 0;
  }

  ${ListDescription} {
    width: 100% !important;
    margin-top: 7px;
    padding: 0 !important;
  }
`;

export { ListLayout, ListItemLayout };
