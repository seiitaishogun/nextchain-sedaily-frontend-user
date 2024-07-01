import Link from 'next/link';
import styled from 'styled-components';
import classNames from 'classnames';

interface Props {
  text: string;
  href: string;
  className?: string;
}

function LinkTitle({ text, href, className }: Props) {
  return (
    <TitleLayout className={classNames(className, 'title')}>
      <Link href={href || '/'} prefetch={false}>
        <span>{text}</span>
      </Link>
    </TitleLayout>
  );
}

export default LinkTitle;
export type { Props as TitleProps };

export const TitleLayout = styled.h4`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 0 0 20px 0;
  font-size: 21px;
  font-weight: bold;
  line-height: 26px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:after {
      content: '';
      display: inline-block;
      overflow: hidden;
      width: 9px;
      height: 16px;
      margin-left: 8px;
      background: url(${props =>
          `${props.theme.imageUrl}/common/arrow_right.webp`})
        no-repeat center center;
      background-size: cover;
      text-indent: -9999px;
    }
  }
`;
