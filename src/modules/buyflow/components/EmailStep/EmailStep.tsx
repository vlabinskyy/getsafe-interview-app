import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import { updateFormValues } from '../../actions';
import { Field } from '../../../form-controls/components';
import { NavigationButtons } from '../NavigationButtons';
import { BuyflowWizardContext } from '../Buyflow/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailStepValidationSchema } from './validation';
import { fieldLabelMap } from '../../constants';

interface EmailFormValues {
  email: string;
}

export const EmailStep: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormValues>({
    resolver: yupResolver<EmailFormValues>(emailStepValidationSchema),
    reValidateMode: 'onSubmit',
  });

  const { navigateToNextStep } = useContext(BuyflowWizardContext);

  const { actions } = useStateMachine({ updateFormValues });
  const onSubmit = (formValues: EmailFormValues) => {
    actions.updateFormValues({ email: formValues.email });
    navigateToNextStep();
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Field
        label={fieldLabelMap.email.label}
        error={errors.email}
        id={fieldLabelMap.email.id}
      >
        <input
          type="email"
          id={fieldLabelMap.email.id}
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email')}
        />
      </Field>
      <NavigationButtons />
    </form>
  );
};
