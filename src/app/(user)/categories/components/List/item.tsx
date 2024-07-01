import Image from 'next/image';
import Link from 'next/link';
import { getContentURL } from '@module/utils/url';
import { DEFAULT_THUMBNAIL_PATH } from '@/app/(user)/constants/image';
import {
  ListDescription,
  ListName,
  ListLargeThumbnail,
  ListViewCount,
} from '@/app/(user)/components/List/styled';
import { ListItemProps } from '@/app/(user)/categories/components/List/types';
import {
  ListItemDetailBox,
  ListItemLayout as Layout,
} from '@/app/(user)/categories/components/List/styled';

function ListItem({ data }: ListItemProps) {
  const contentPath = getContentURL(data.id);

  return (
    <Layout>
      <Link href={contentPath} prefetch={false}>
        <ListLargeThumbnail>
          <Image
            src={data.thumbnail || DEFAULT_THUMBNAIL_PATH}
            alt=""
            width={100}
            height={100}
          />
        </ListLargeThumbnail>

        <ListItemDetailBox>
          <div>
            <ListName>{data.name}</ListName>
            <ListDescription>{data.summary}</ListDescription>
          </div>

          <ListViewCount>{data.view_count}</ListViewCount>
        </ListItemDetailBox>
      </Link>
    </Layout>
  );
}

export default ListItem;
