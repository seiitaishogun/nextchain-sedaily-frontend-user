import { ContentDetailT } from '@module/types/content/detail';

interface ContentHeaderProps {
  content: ContentDetailT;
}

interface ContentCategoryProps {
  category?: string;
  type: string;
}

interface ContentCountProps {
  content: ContentDetailT;
}

export type { ContentHeaderProps, ContentCategoryProps, ContentCountProps };
