import styled from 'styled-components';
import Link from 'next/link';

const EmptyList = styled.div`
  padding: 70px 0;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  line-height: normal;
  letter-spacing: -0.18px;
`;

const EmptyButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 40px;
  margin: 16px auto 0;
  border-radius: 12px;
  background: ${props => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  color: ${props => props.theme.colors.white};
`;

export { EmptyList, EmptyButton };
