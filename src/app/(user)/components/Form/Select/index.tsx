import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Control, useController } from 'react-hook-form';

interface Props extends HTMLAttributes<HTMLSelectElement> {
  control: Control;
  name: string;
  disabled?: boolean;
  isDefault?: boolean;
  defaultConfig?: {
    text?: string;
    value?: string | number;
  };
  options: Array<{ text: string | number; value: string | number }>;
}

const Layout = styled.select<{ $selectedDefault: boolean }>`
  appearance: none;
  width: auto;
  height: 55px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background: ${props => props.theme.colors.white};
  font-size: 18px;
  text-align: center;
  text-align: -webkit-center;
  text-align-last: center;
  color: ${props =>
    props.$selectedDefault
      ? props.theme.colors.placeholder
      : props.theme.colors.black100};
  outline: none;

  &:disabled {
    border: 1px solid ${props => props.theme.colors.borderGray};
    color: ${props => props.theme.colors.borderGray};
  }
`;

function Select({
  control,
  name,
  disabled,
  isDefault,
  defaultConfig,
  options,
  ...props
}: Props) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });
  return (
    <Layout
      $selectedDefault={value === defaultConfig?.value}
      {...props}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {isDefault && (
        <option className="default-option" value={defaultConfig?.value || ''}>
          {defaultConfig?.text || '선택'}
        </option>
      )}
      {options.map(({ text, value: optionValue }) => (
        <option key={optionValue} value={optionValue}>
          {text}
        </option>
      ))}
    </Layout>
  );
}

export default Select;
