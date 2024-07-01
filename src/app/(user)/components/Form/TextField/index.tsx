import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Control, useController } from 'react-hook-form';

const Layout = styled.input`
  width: 100%;
  height: 55px;
  margin: 0;
  padding: 0 20px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  font-size: 18px;
  font-weight: normal;
  color: ${props => props.theme.colors.black};
  outline: none;

  &[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &::placeholder {
    color: ${props => props.theme.colors.placeholder};
  }
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
}

function TextField({ control, name, type, ...props }: Props) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });
  return (
    <Layout
      type={type || 'text'}
      {...props}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextField;
