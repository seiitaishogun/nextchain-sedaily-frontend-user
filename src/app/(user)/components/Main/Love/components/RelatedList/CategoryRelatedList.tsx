import { useQuery } from '@tanstack/react-query';
import { fetchContentRecommend } from '@module/api/content/related';
import SwiperList from '../SwipeList';

function CategoryRelatedList() {
  const contentListCategoryRelated = useQuery(
    ['contentRecommend'],
    () => fetchContentRecommend(),
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
      data={contentListCategoryRelated.data.slice(0, 2)}
    />
  );
}

export default CategoryRelatedList;
