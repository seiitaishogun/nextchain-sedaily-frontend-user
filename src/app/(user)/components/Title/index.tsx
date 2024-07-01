import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

interface Props {
  text: string;
  className?: string;
  children?: React.ReactNode;
}

function Title({ text, className, children }: Props) {
  return (
    <TitleLayout className={classNames(className, 'title')}>
      <span>{text}</span>
      <div>{children}</div>
    </TitleLayout>
  );
}

export default Title;
export type { Props as TitleProps };

const TitleLayout = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 31px;
  padding: 0 0 0 15px;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 4px;
    height: 100%;
    background: #e01f27;
  }

  span {
    font-size: 22px;
    font-weight: bold;
  }
`;
