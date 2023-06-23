import * as Yup from 'yup';

export const ageStepValidationSchema = Yup.object().shape({
  age: Yup.number()
    .required('Age is required')
    .min(1, 'Age should be greater than 1')
    .max(120, 'Age should be less than 120'),
});
