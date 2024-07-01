import { ContentDetailT } from '@module/types/content/detail';
import { PurchaseT, SajuT } from '@module/types/content/result';
import { ParentT } from '@module/types/content/fortune';

interface SajuResultProps {
  content: ContentDetailT;
  purchase: PurchaseT;
  parents: ParentT[];
  saju: SajuT[];
}

export type { SajuResultProps };
