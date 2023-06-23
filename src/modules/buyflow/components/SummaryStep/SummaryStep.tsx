import React from 'react';
import { Link } from 'react-router-dom';
import { useSummaryStep } from './hooks/useSummaryStep';
import { NavigationButtons } from '../NavigationButtons';

export const SummaryStep: React.FC = () => {
  const { summaryValues, purchaseRoute } = useSummaryStep();
  return (
    <>
      <dl>
        {summaryValues.map((field) => (
          <li key={field.key}>
            {field.label}:{field.value}
          </li>
        ))}
      </dl>
      <div>
        <Link to={purchaseRoute}>Purchase</Link>
      </div>
      <NavigationButtons />
    </>
  );
};
