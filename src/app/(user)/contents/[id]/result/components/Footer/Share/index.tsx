import React from 'react';
import { useRouter } from 'next/navigation';
import useShare from '@module/hooks/common/useShare';
import { ContentDetailT } from '@module/types/content/detail';
import { PurchaseT } from '@module/types/content/result';
import { ShareButton } from '@/app/(user)/contents/[id]/result/components/Footer/styled';
import Share from "@/app/(user)/components/Share";

interface Props {
  isShare: boolean;
  content: ContentDetailT;
  purchase: PurchaseT;
}

function ContentShare({ isShare, content, purchase }: Props) {
  const router = useRouter();

  const description = `${purchase.name}님이 ${content.name}에 관한 이야기를 펼쳐보았어요. 같이 보러가실래요?`;
  const { handleShare, renderShare } = useShare({
    kakaoOptions: {
      name: content.name,
      image:
        content.banner_mobile ||
        `${process.env.APP_IMAGE_URL}/common/og_logo_luck.jpg`,
      description,
    },
    ShareComponent: Share,
  });

  if (isShare) {
    return (
      <ShareButton
        type="button"
        className="btn-share"
        onClick={() => router.push(`/contents/${content.id}`)}
      >
        {content.name} 보러가기
      </ShareButton>
    );
  }

  return (
    <>
      <ShareButton type="button" className="btn-share" onClick={handleShare}>
        공유하기
      </ShareButton>
      {renderShare()}
    </>
  );
}

export default ContentShare;
export type { Props as ContentShareProps };
