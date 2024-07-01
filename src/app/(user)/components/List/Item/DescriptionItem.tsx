import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(user)/constants/image';
import {
  ListDescription,
  ListName,
  ListMediumThumbnail,
} from '@/app/(user)/components/List/styled';
import { MainDetailProps } from '@/app/(user)/components/Main/types';

const Layout = styled.div`
  a {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
`;

const ListDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 121px);
`;

function DescriptionItem({ data }: MainDetailProps) {
  const contentPath = getContentURL(data.id);

  return (
    <Layout>
      <Link href={contentPath} prefetch={false}>
        <ListMediumThumbnail>
          <Image
            src={data.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt=""
            width={190}
            height={140}
          />
        </ListMediumThumbnail>

        <ListDetailBox>
          <ListName dangerouslySetInnerHTML={{ __html: data.name }} />
          <ListDescription dangerouslySetInnerHTML={{ __html: data.summary }} />
        </ListDetailBox>
      </Link>
    </Layout>
  );
}

export default DescriptionItem;
