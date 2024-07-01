import styled from 'styled-components';

interface Props {
  summary: string;
  contents: string;
}

const Layout = styled.div`
  h5 {
    margin-top: 20px;
    font-size: 38px;
    font-weight: bold;
    color: ${props => props.theme.colors.black};
    line-height: 46px;
    text-align: center;
  }

  p {
    margin-top: 6px;
    font-size: 20px;
    font-weight: normal;
    color: ${props => props.theme.colors.black};
    text-align: center;
  }
`;

function ScoreSummary({ summary, contents }: Props) {
  return (
    <Layout>
      <h5 dangerouslySetInnerHTML={{ __html: `${summary}점` }} />
      <p dangerouslySetInnerHTML={{ __html: contents }} />
    </Layout>
  );
}

export default ScoreSummary;
