import React from 'react';
import { ContentTypeE } from '@module/types/content';
import { ContentResultT } from '@module/types/content/result';
import {
  ContentBox,
  ResultLayout,
} from '@/app/(user)/contents/[id]/result/components/Result.styled';
import SajuResult from '@/app/(user)/contents/[id]/result/components/Saju';
// import RecommendContent from '@/app/(user)/contents/[id]/result/components/RecommendContent';
import ContentFooter from '@/app/(user)/contents/[id]/result/components/Footer';
import TarotResult from '@/app/(user)/contents/[id]/result/components/Tarot';
import RelatedContent from '../../components/RelatedContent';

interface Props {
  data: ContentResultT;
  isShare: boolean;
}

function ContentResult({ data, isShare }: Props) {
  const { content, purchase, parents, saju } = data;

  const renderResult = () => {
    switch (content?.type.name) {
      case ContentTypeE.Saju:
        return (
          <SajuResult
            content={content}
            purchase={purchase}
            parents={parents}
            saju={saju}
          />
        );
      case ContentTypeE.Tarot:
        return (
          <TarotResult
            content={content}
            parents={parents}
            purchase={purchase}
          />
        );
      default:
        return null;
    }
  };

  /* TODO: 피드백 사용시 주석 제거
  const feedbackTitle = useMemo(
    () => (
      <>
        방금 보신 {'<'}
        {content.name}
        {'>'} 콘텐츠는 어떠셨나요?
        <br />
        {purchase.name || ''}님의 후기를 나누어주세요!
      </>
    ),
    [content.name, purchase.name]
  );
   */

  return (
    <ResultLayout>
      <ContentBox>{renderResult()}</ContentBox>

      {/* <ContentFeedback title={feedbackTitle} isFeedbackAction={!isShare} /> */}

      {/* <RecommendContent /> */}

      <ContentFooter isShare={isShare} content={content} purchase={purchase} />
      <RelatedContent content={content} />
    </ResultLayout>
  );
}

export default ContentResult;
