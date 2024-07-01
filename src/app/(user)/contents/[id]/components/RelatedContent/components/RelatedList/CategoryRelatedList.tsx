import { useQuery } from '@tanstack/react-query';
import { ContentDetailT } from '@module/types/content/detail';
import { fetchContentCategoryRelated } from '@module/api/content/related';
import SwiperList from '../SwipeList';

interface RelatedContentProps {
  content: ContentDetailT;
}

function CategoryRelatedList({ content }: RelatedContentProps) {
  const contentListCategoryRelated = useQuery(
    ['contentCategoryRelated', content.id],
    () => fetchContentCategoryRelated(content.id),
    {
      initialData: {
        data: [],
      },
      select: res => res.data,
    }
  );

  if (contentListCategoryRelated.data.length === 0) return null;
  return (
    <SwiperList
      size="large"
      data={contentListCategoryRelated.data}
      title={
        <h2>
          지금 가장 인기있는{' '}
          <span>{contentListCategoryRelated.data[0].category}</span> 입니다!
        </h2>
      }
      showCategoryName={false}
    />
  );
}

export default CategoryRelatedList;
