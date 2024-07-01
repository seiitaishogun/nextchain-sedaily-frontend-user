import { TodayListLayout } from '@/app/(user)/components/Main/Today/styled';
import { MainProps } from '@/app/(user)/components/Main/types';
import TodayListItem from '@/app/(user)/components/Main/Today/Item';

function TodayList({ data }: MainProps) {
  return (
    <TodayListLayout>
      {data.map(d => (
        <TodayListItem key={d.id} data={d} />
      ))}
    </TodayListLayout>
  );
}

export default TodayList;
