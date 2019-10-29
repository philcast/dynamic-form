import * as React from 'react';
import { VerticalFormGroup } from './VerticalFormGroup';
import { HorizontalFormGroup } from './HorizontalFormGroup';

interface ResponsiveFormGroupProps {
  inputId: string;
  label?: string;
  cols?: number;
  small?: boolean;
}

export const ResponsiveFormGroup: React.FC<ResponsiveFormGroupProps> = ({ inputId, label, cols, small = false, children }) => {
  return small
  ? (
    <VerticalFormGroup inputId={inputId} label={label}>{children}</VerticalFormGroup>
    )
    : (
      <HorizontalFormGroup inputId={inputId} label={label} cols={cols}>{children}</HorizontalFormGroup>
  );
};