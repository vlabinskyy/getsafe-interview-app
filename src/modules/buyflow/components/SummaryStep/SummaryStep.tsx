import React from 'react';
import { Link } from 'react-router-dom';
import { useSummaryStep } from './hooks/useSummaryStep';
import { NavigationButtons } from '../NavigationButtons';
import './SummaryStep.css';
export const SummaryStep: React.FC = () => {
  const { summaryValues, purchaseRoute } = useSummaryStep();
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {summaryValues.map((field) => (
            <tr key={field.key}>
              <td>{field.label}</td>
              <td>{field.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <Link to={purchaseRoute}>Purchase</Link>
      </div>
      <NavigationButtons />
    </>
  );
};
