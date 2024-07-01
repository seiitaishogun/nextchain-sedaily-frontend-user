import React from 'react';
import styled from 'styled-components';
import SajuInput from '@/app/(user)/contents/[id]/components/Form/Saju/Input';
import Title from '@/app/(user)/components/Title';

interface Props {
  isUser: boolean;
  text: string;
}

const Layout = styled.section`
  margin-top: 20px;

  .title {
    margin-bottom: 20px;
  }
`;

function SajuForm({ isUser, text }: Props) {
  return (
    <Layout>
      <Title text={text} />
      <SajuInput isUser={isUser} />
    </Layout>
  );
}

export default SajuForm;
