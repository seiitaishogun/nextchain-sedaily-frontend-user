import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { getContentURL } from '@module/utils/url';
import { ContentRelatedList } from '@module/types/content/detail';
import { SwipeListLargeThumbnail } from '../styled';
import { ListName, ListSummary } from '@/app/(user)/components/List/styled';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(user)/constants/image';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  ${ListSummary} {
    margin-top: 10px;
  }
`;

const ContentImage = styled.div`
  position: relative;
`;

const ContentName = styled(ListName)`
  font-size: 16px;
  font-color: #121212;
  line-height: 22.3px;
  margin-top: 5px;
`;

const ContentSummary = styled(ListName)`
  font-size: 16px;
  font-weight: 400;
  font-color: #121212;
  line-height: 22.3px;
  margin-top: 5px;
`;

interface LargeProps {
  data: ContentRelatedList;
}

function Large({ data }: LargeProps) {
  const contentPath = getContentURL(data.id);

  return (
    <Layout>
      <SwipeListLargeThumbnail>
        <ContentImage>
          <Link href={contentPath} prefetch={false}>
            <Image
              src={data.thumbnail || DEFAULT_THUMBNAIL_PATH}
              alt=""
              width={293}
              height={152}
            />
          </Link>
        </ContentImage>
      </SwipeListLargeThumbnail>

      <ContentName>
        <Link href={contentPath} prefetch={false}>
          {data.name}
        </Link>
      </ContentName>
      <ContentSummary>
        <Link href={contentPath} prefetch={false}>
          {data.summary}
        </Link>
      </ContentSummary>
    </Layout>
  );
}

export default Large;
