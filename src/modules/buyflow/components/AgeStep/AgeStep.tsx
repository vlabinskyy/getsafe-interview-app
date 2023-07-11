import React, { useContext } from 'react';
import { AgeStepProps } from './interfaces';
import { Field } from '../../../form-controls/components';
import { NavigationButtons } from '../NavigationButtons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BuyflowWizardContext } from '../Buyflow/constants';
import { useStateMachine } from 'little-state-machine';
import { ageStepValidationSchema } from './validation';
import { updateFormValues } from '../../actions';
import { fieldLabelMap } from '../../constants';

interface AgeFormValues {
  age: number;
}

export const AgeStep: React.FC<AgeStepProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AgeFormValues>({
    resolver: yupResolver<AgeFormValues>(ageStepValidationSchema),
  });

  const { navigateToNextStep } = useContext(BuyflowWizardContext);

  const { actions } = useStateMachine({ updateFormValues });
  const onSubmit = (formValues: AgeFormValues) => {
    actions.updateFormValues({ age: formValues.age });
    navigateToNextStep();
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Field
        label={fieldLabelMap.age.label}
        error={errors.age}
        id={fieldLabelMap.age.id}
      >
        <input
          type="number"
          id={fieldLabelMap.age.id}
          aria-invalid={errors.age ? 'true' : 'false'}
          defaultValue={0}
          {...register('age')}
        />
      </Field>
      <NavigationButtons />
    </form>
  );
};
