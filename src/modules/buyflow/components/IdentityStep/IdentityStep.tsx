import React, { useState } from 'react';

interface IdentityStepProps {}

export const IdentityStep: React.FC<IdentityStepProps> = () => {
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
      <button onClick={() => {}}>Next</button>
    </>
  );
};
