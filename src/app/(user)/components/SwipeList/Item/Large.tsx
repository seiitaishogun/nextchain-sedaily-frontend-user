import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(user)/constants/image';
import { ListName, ListSummary } from '@/app/(user)/components/List/styled';
import { SwipeListLargeThumbnail } from '@/app/(user)/components/SwipeList/styled';
import { MainDetailProps } from '@/app/(user)/components/Main/types';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  ${ListName} {
    margin-top: 12px;
  }

  ${ListSummary} {
    margin-top: 8px;
  }
`;

function Large({ data }: MainDetailProps) {
  const contentPath = getContentURL(data.id);

  return (
    <Layout>
      <Link href={contentPath} prefetch={false}>
        <SwipeListLargeThumbnail>
          <Image
            src={data.thumbnail || DEFAULT_THUMBNAIL_PATH}
            width={293}
            height={152}
            alt=""
          />
        </SwipeListLargeThumbnail>

        <ListName>{data.name}</ListName>

        <ListSummary>{data.summary}</ListSummary>
      </Link>
    </Layout>
  );
}

export default Large;
