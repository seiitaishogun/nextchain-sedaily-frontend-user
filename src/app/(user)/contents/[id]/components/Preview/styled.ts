import styled from 'styled-components';
import { SummaryListLayout } from '@/app/(user)/components/List/styled';

const ContentPreviewLayout = styled.section`
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.borderGray};

  ${SummaryListLayout} {
    margin-top: 20px;
    padding-left: 0;
  }
`;

export { ContentPreviewLayout };
