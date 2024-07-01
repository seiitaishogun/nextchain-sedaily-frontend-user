import { useEffect, useState } from 'react';
import { ContentDetailT } from '@module/types/content/detail';
import CategoryRelatedList from './components/RelatedList/CategoryRelatedList';
import StatusRelatedList from './components/RelatedList/StatusRelatedList';

interface RelatedContentProps {
  content: ContentDetailT;
}

function RelatedContent({ content }: RelatedContentProps) {
  const [renderList, setRenderList] = useState<JSX.Element | null>(null);
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  const renderListRandom = () => {
    if (randomNumber === 1) {
      return <CategoryRelatedList content={content} />;
    }
    if (randomNumber === 2) {
      return (
        <StatusRelatedList
          content={content}
          title={
            <h2>
              <span>새로 추가된</span> 운세를 만나보세요!
            </h2>
          }
          status={{ is_new: 1 }}
          statusName="new"
        />
      );
    }
    if (randomNumber === 3) {
      return (
        <StatusRelatedList
          content={content}
          title={
            <h2>
              <span>지금 가장 인기있는</span> 운세를 만나보세요!
            </h2>
          }
          status={{ is_hot: 1 }}
          statusName="hot"
        />
      );
    }
    return (
      <StatusRelatedList
        content={content}
        title={
          <h2>
            <span>지금 할인하고 있는</span> 운세를 만나보세요!
          </h2>
        }
        status={{ discount_price: 1 }}
        statusName="discount"
      />
    );
  };

  useEffect(() => {
    setRenderList(renderListRandom());
  }, []);

  return renderList;
}

export default RelatedContent;
