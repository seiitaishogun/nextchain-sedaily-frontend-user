import { ContentListLimit } from '@module/types/content/list';
import { MainContentT } from '@module/types/main';

interface MainProps {
  data: MainContentT[];
}

interface MainDetailProps {
  data: MainContentT;
}

interface ContentListProps {
  data: ContentListLimit;
}

interface ContentListLimitProps {
  data: ContentListLimit[];
}

interface OrderItemProps extends ContentListProps {
  order: number;
}

export type {
  MainProps,
  MainDetailProps,
  ContentListProps,
  OrderItemProps,
  ContentListLimitProps,
};
