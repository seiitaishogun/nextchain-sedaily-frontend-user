import { PurchaseT, SajuT } from '@module/types/content/result';
import { CalendarE, GenderE } from '@module/types/user';

interface UserT {
  name: string;
  gender: GenderE;
  birthed_at: string;
  calendar: CalendarE;
}

interface UserInfoProps {
  purchase: PurchaseT;
  saju: SajuT[];
}

interface UserInfoItemProps {
  user: UserT;
  saju: SajuT;
}

export type { UserT, UserInfoProps, UserInfoItemProps };
