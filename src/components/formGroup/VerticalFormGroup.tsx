import * as React from 'react';

interface VerticalFormGroupProps {
  inputId: string;
  label?: string;
}

export const VerticalFormGroup: React.FC<VerticalFormGroupProps> = ({inputId, label, children}) => (
  <div className="form-group">
    <label htmlFor={inputId}>{label || inputId}</label>
    {children}
  </div>
);