import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  h4 {
    overflow: hidden;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    line-height: 21px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin-top: 25px;
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors.black100};
    line-height: 24px;
    text-align: center;
    word-break: keep-all;
  }
`;

interface Props {
  name: string;
  summary: string;
}

function Summary({ name, summary }: Props) {
  return (
    <Layout>
      <h4 dangerouslySetInnerHTML={{ __html: name }} />
      <p dangerouslySetInnerHTML={{ __html: summary }} />
    </Layout>
  );
}

export default Summary;
