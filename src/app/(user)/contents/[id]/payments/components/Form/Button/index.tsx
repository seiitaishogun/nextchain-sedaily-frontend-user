import styled from 'styled-components';

interface Props {
  type?: 'button' | 'submit';
  isValid: boolean;
  text?: string;
  onClick?: () => void;
}

const Layout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary};
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};

  &:disabled {
    background-color: rgba(155, 165, 183, 0.2);
    color: ${props => props.theme.colors.placeholder};
  }
`;

function FormButton({ type, isValid, text, onClick }: Props) {
  return (
    <Layout type={type || 'button'} disabled={!isValid} onClick={onClick}>
      {text || '다음'}
    </Layout>
  );
}

export default FormButton;
