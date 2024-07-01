import Link from 'next/link';
import { getPurchaseURL } from '@module/utils/url';
import {
  ListDateBox,
  ListDescription,
  ListName,
} from '@/app/(user)/components/List/styled';
import { ListItemProps } from '@/app/(user)/contents/replays/components/List/types';
import { ListItemLayout as Layout } from '@/app/(user)/contents/replays/components/List/styled';

function ListItem({ data }: ListItemProps) {
  const contentPath = getPurchaseURL({
    contentId: data.id,
    purchaseId: data.purchase_id,
  });

  return (
    <Layout>
      <ListName>
        <Link href={contentPath} prefetch={false}>
          {data.name}
        </Link>
      </ListName>
      <ListDescription>
        <Link href={contentPath} prefetch={false}>
          {data.summary}
        </Link>
      </ListDescription>

      <ListDateBox>
        <Link href={contentPath} prefetch={false}>
          조회일시: {data.created_at}
        </Link>
        <Link href={contentPath} prefetch={false}>
          만료일시: {data.available_at}
        </Link>
      </ListDateBox>
    </Layout>
  );
}

export default ListItem;
