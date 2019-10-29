import * as React from 'react';

interface HorizontalFormGroupProps {
  inputId: string;
  label?: string;
  cols?: number;
}

export const HorizontalFormGroup: React.FC<HorizontalFormGroupProps> = ({inputId, label, cols = 5, children}) => (
  <div className="form-group row">
    <label htmlFor={inputId} className={`col-md-${cols} col-form-label`}>{label || inputId}</label>
    <div className="col-md-7">{children}</div>
  </div>
);