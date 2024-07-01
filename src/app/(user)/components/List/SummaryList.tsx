import Link from 'next/link';
import { getContentURL } from '@module/utils/url';
import { ContentListLimitProps } from '@/app/(user)/components/Main/types';
import { SummaryListLayout as Layout } from '@/app/(user)/components/List/styled';

interface Props extends ContentListLimitProps {
  size?: 'medium' | 'large';
}

function SummaryList({ data, size }: Props) {
  return (
    <Layout $size={size}>
      {data.map(d => (
        <li key={d.id}>
          <Link href={getContentURL(d.id)} prefetch={false}>
            {d.name}
          </Link>
        </li>
      ))}
    </Layout>
  );
}

export default SummaryList;
