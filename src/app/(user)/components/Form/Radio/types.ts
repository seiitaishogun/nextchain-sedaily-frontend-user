import React, { InputHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';

interface SingleRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<any>;
  name: string;
  text: string | React.ReactNode | JSX.Element;
  value: string | number;
}

interface MultiRadioProps {
  control: Control<any>;
  name: string;
  radios: {
    value: string | number;
    text: string | React.ReactNode | JSX.Element;
  }[];
}

export type { SingleRadioProps, MultiRadioProps };
