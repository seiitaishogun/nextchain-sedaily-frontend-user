import React from 'react';
import styled from 'styled-components';
import { ContentDetailT } from '@module/types/content/detail';
import TarotInput from '@/app/(user)/contents/[id]/components/Form/Tarot/Input';
import Title from '@/app/(user)/components/Title';
import ContentSample from '@/app/(user)/contents/[id]/components/Sample';

interface Props {
  isUser: boolean;
  text?: string;
  content?: ContentDetailT;
}

const Layout = styled.section`
  margin-top: 15px;

  .title {
    margin-bottom: 15px;
  }
`;

function TarotForm({ isUser, text, content }: Props) {
  return (
    <Layout>
      {text && (
        <Title text={text}>
          {content && <ContentSample content={content} />}
        </Title>
      )}
      <TarotInput isUser={isUser} />
    </Layout>
  );
}

export default TarotForm;
