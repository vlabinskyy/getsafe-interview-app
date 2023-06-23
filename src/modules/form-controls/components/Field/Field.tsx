import React from 'react';
import { FieldError } from 'react-hook-form';

interface FieldProps {
  id: string;
  label: string;
  children: React.ReactElement;
  error: FieldError | undefined;
}
export const Field = (props: FieldProps) => {
  const { label, children, error, id } = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {children}
      <br />
      {error && <small style={{ color: 'lightcoral' }}>{error.message}</small>}
    </div>
  );
};
