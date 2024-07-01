import React from 'react';
import styled from 'styled-components';
import { Control, useController } from 'react-hook-form';

interface Props {
  name: string;
  control: Control<any>;
  handleChange?: () => void;
}

const Layout = styled.input`
  appearance: none;
  position: relative;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  margin-right: 6px;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  background-image: url(${props =>
    `${props.theme.imageUrl}/common/check_off.webp`});
  background-color: #f8f8f8;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 18px 18px;
  cursor: pointer;

  &:checked {
    border: 0;
    background-image: url(${props =>
      `${props.theme.imageUrl}/common/check_on.webp`});
    background-color: ${props => props.theme.colors.primary};
  }
`;

function Checkbox({ name, control, handleChange }: Props) {
  const {
    field: { onChange, value: checkedValue },
  } = useController({
    name,
    control,
  });

  return (
    <Layout
      type="checkbox"
      id={name}
      name={name}
      checked={checkedValue}
      onChange={e => {
        if (handleChange) handleChange();
        onChange(e.target.checked);
      }}
    />
  );
}

export default Checkbox;
