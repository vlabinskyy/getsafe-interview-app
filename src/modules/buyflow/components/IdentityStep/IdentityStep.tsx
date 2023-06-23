import React, { useContext } from 'react';
import { Field } from '../../../form-controls/components/Field/Field';
import { NavigationButtons } from '../NavigationButtons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BuyflowWizardContext } from '../Buyflow/constants';
import { useStateMachine } from 'little-state-machine';
import { updateFormValues } from '../../actions';
import { identityStepValidationSchema } from './validation';
import { fieldLabelMap } from '../../constants';

interface IdentityFormValues {
  firstName: string;
  lastName: string;
}

export const IdentityStep: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IdentityFormValues>({
    resolver: yupResolver<IdentityFormValues>(identityStepValidationSchema),
  });

  const { navigateToNextStep } = useContext(BuyflowWizardContext);

  const { actions } = useStateMachine({ updateFormValues });
  const onSubmit = (formValues: IdentityFormValues) => {
    actions.updateFormValues({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
    });
    navigateToNextStep();
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Field
        label={fieldLabelMap.firstName.label}
        error={errors.firstName}
        id={fieldLabelMap.firstName.id}
      >
        <input
          type="text"
          id={fieldLabelMap.firstName.id}
          aria-invalid={errors.firstName ? 'true' : 'false'}
          {...register('firstName')}
        />
      </Field>
      <Field
        label={fieldLabelMap.lastName.label}
        error={errors.lastName}
        id={fieldLabelMap.lastName.id}
      >
        <input
          type="text"
          id={fieldLabelMap.lastName.id}
          aria-invalid={errors.lastName ? 'true' : 'false'}
          {...register('lastName')}
        />
      </Field>
      <NavigationButtons />
    </form>
  );
};
