import { PurchaseT } from '@module/types/content/result';
import { ParentT } from '@module/types/content/fortune';
import { ContentDetailT } from '@module/types/content/detail';

interface TarotResultProps {
  content: ContentDetailT;
  parents: ParentT[];
  purchase: PurchaseT;
}

export type { TarotResultProps };
