import React from 'react';
import styled from 'styled-components';
import { ChildLayout } from '@/app/(user)/contents/[id]/result/components/Result.styled';
import Summary from '@/app/(user)/contents/[id]/result/components/Fortune/Template/Summary';

const SubBox = styled(ChildLayout)`
  margin-top: 15px;
  padding-top: 15px;

  p {
    margin-top: 15px;
    font-weight: normal;
    word-break: normal;
  }
`;

interface Props {
  sign?: string | null;
  subName: string;
  name: string;
  summary: string;
  contents: string;
}

function Description({ sign, subName, name, summary, contents }: Props) {
  return (
    <div>
      <Summary name={name} summary={summary} />

      <SubBox sign={sign}>
        <h4 dangerouslySetInnerHTML={{ __html: subName }} />
        <p dangerouslySetInnerHTML={{ __html: contents }} />
      </SubBox>
    </div>
  );
}

export default Description;
