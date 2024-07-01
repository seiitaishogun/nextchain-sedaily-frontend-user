import React from 'react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import classNames from 'classnames';
import { numberWithCommas } from '@module/utils/number';
import useShare from '@module/hooks/common/useShare';
import { contentLikeSelector } from '@module/store/content/like';
import useUpdateContentLike from '@module/hooks/content/useUpdateContentLike';
import useAlert from '@module/hooks/common/useAlert';
import { ContentCountProps } from '@/app/(user)/contents/[id]/components/Header/types';
import {
  ContentCount as Layout,
  ContentCountItem,
} from '@/app/(user)/contents/[id]/components/Header/styled';
import Share from "@/app/(user)/components/Share";

function ContentCount({ content }: ContentCountProps) {
  const { renderMessage, setAlertOptions, handleReset } = useAlert();
  const isLike = useRecoilValue(contentLikeSelector(content.id));
  const { handleUpdateLike } = useUpdateContentLike({
    content,
    setAlertOptions,
    handleReset,
    isUpdateQuery: true,
  });

  const description = `${content.name}에 관한 이야기를 보러가실래요?`;
  const { handleShare, renderShare } = useShare({
    kakaoOptions: {
      name: content.name,
      image:
        content.banner_mobile ||
        `${process.env.IMAGE_URL}/common/kakao_share_logo_luck.png`,
      description,
    },
    ShareComponent: Share,
  });

  const isPay = content.price > 0;

  return (
    <>
      <Layout>
        <ContentCountItem type="button" className="btn-view">
          <span>{numberWithCommas(content.view_count)}</span>
        </ContentCountItem>
        <ContentCountItem
          type="button"
          className={classNames('btn-like', { active: isLike })}
          onClick={handleUpdateLike}
        >
          <span>{numberWithCommas(content.like_count)}</span>
        </ContentCountItem>
        <ContentCountItem
          type="button"
          className="btn-share"
          onClick={handleShare}
        >
          <span>{numberWithCommas(content.share_count)}</span>
        </ContentCountItem>

        {isPay && (
          <Image
            src="/common/won_icon.webp"
            width={22}
            height={22}
            alt="유로 콘텐츠"
          />
        )}
      </Layout>

      {renderShare()}
      {renderMessage()}
    </>
  );
}

export default ContentCount;
