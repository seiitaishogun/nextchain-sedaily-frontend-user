import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(user)/constants/image';
import { ListDescription } from '@/app/(user)/components/List/styled';
import { SwipeListLargeThumbnail } from '@/app/(user)/components/SwipeList/styled';
import { MainDetailProps } from '@/app/(user)/components/Main/types';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  ${SwipeListLargeThumbnail} {
    margin-top: 0;
  }

  ${ListDescription} {
    width: 100%;
    padding-left: 0;
  }
`;

function Medium({ data }: MainDetailProps) {
  const contentPath = getContentURL(data.id);

  return (
    <Layout>
      <SwipeListLargeThumbnail>
        <Link href={contentPath} prefetch={false}>
          <Image
            src={data.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt=""
            width={195}
            height={113}
          />
        </Link>
      </SwipeListLargeThumbnail>

      <ListDescription>
        <Link href={contentPath} prefetch={false}>
          {data.summary}
        </Link>
      </ListDescription>
    </Layout>
  );
}

export default Medium;
