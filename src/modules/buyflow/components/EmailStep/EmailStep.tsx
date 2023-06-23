import React, { useState } from 'react';

interface EmailStepProps {}

export const EmailStep: React.FC<EmailStepProps> = () => {
  const [email, setEmail] = useState('');
  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value);
          }}
          value={email}
        ></input>
      </div>
    </>
  );
};
