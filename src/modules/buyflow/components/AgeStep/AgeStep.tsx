import React, { useState } from 'react';
import { AgeStepProps } from './interfaces';

export const AgeStep: React.FC<AgeStepProps> = () => {
  const [age, setAge] = useState(0);
  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value));
          }}
          value={age}
        ></input>
      </div>
    </>
  );
};
