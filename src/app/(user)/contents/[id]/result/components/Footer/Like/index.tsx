import { useRecoilValue } from 'recoil';
import { contentLikeSelector } from '@module/store/content/like';
import { ContentDetailT } from '@module/types/content/detail';
import useUpdateContentLike from '@module/hooks/content/useUpdateContentLike';
import useAlert from '@module/hooks/common/useAlert';
import { LikeButton } from '@/app/(user)/contents/[id]/result/components/Footer/styled';

interface Props {
  content: ContentDetailT;
}

function ContentLike({ content }: Props) {
  const isLike = useRecoilValue(contentLikeSelector(content.id));
  const { renderMessage, setAlertOptions, handleReset } = useAlert();
  const { handleUpdateLike } = useUpdateContentLike({
    content,
    setAlertOptions,
    handleReset,
  });

  return (
    <>
      <LikeButton type="button" $isLike={isLike} onClick={handleUpdateLike}>
        좋아요
      </LikeButton>
      {renderMessage()}
    </>
  );
}

export default ContentLike;
