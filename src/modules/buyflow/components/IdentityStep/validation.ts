import * as Yup from 'yup';

export const identityStepValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required')
    .min(1, 'First Name must be at least 2 characters')
    .max(32, 'First Name must not exceed 32 characters'),
  lastName: Yup.string()
    .required('Last Name is required')
    .min(1, 'Last Name must be at least 6 characters')
    .max(32, 'Last Name must not exceed 32 characters'),
});
