import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(user)/constants/image';
import {
  ListLargeName,
  ListFullThumbnail,
} from '@/app/(user)/components/List/styled';
import { MainDetailProps } from '@/app/(user)/components/Main/types';

const Layout = styled.div`
  padding-bottom: 20px;
`;

function MoneySection({ data }: MainDetailProps) {
  const contentPath = getContentURL(data.id);

  return (
    <Layout>
      <Link href={contentPath} prefetch={false}>
        <ListFullThumbnail>
          <Image src={data.thumbnail || DEFAULT_THUMBNAIL_PATH} alt="" fill />
        </ListFullThumbnail>

        <ListLargeName dangerouslySetInnerHTML={{ __html: data.name }} />
      </Link>
    </Layout>
  );
}

export default MoneySection;
