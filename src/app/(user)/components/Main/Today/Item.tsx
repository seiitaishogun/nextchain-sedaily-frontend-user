import Link from 'next/link';
import Image from 'next/image';
import { getContentURL } from '@module/utils/url';
import {
  TodayListItem as Layout,
  TodayContentName,
  TodayContentSummary,
  TodayListInfo,
  TodayListThumbnail,
} from '@/app/(user)/components/Main/Today/styled';
import { MainDetailProps } from '@/app/(user)/components/Main/types';

function TodayListItem({ data }: MainDetailProps) {
  const contentURL = getContentURL(data.id);
  return (
    <Layout>
      <Link href={contentURL} prefetch={false}>
        <TodayListThumbnail>
          <Image src={data.thumbnail || ''} width={190} height={140} alt="" />
        </TodayListThumbnail>
        <TodayListInfo>
          <TodayContentSummary
            dangerouslySetInnerHTML={{ __html: data.summary }}
          />
          <TodayContentName dangerouslySetInnerHTML={{ __html: data.name }} />
        </TodayListInfo>
      </Link>
    </Layout>
  );
}

export default TodayListItem;
