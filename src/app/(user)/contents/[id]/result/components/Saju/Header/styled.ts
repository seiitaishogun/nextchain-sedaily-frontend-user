import styled from 'styled-components';
import { ContentName as Name } from '@/app/(user)/contents/[id]/components/Header/styled';

const ContentResultHeaderLayout = styled.div`
  padding-top: 16px;
  padding-bottom: 28px;
`;

const ContentName = styled(Name)`
  margin-top: 40px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export { ContentResultHeaderLayout, ContentName };
