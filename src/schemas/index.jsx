import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required') .matches(/^regex@gmail.com$/, 'Email must be "regex@gmail.com"'),
  password: Yup.string()
    .required('Password is required')
    .matches(/^rishiMe@199$/, 'Password must be "r___M__99"'),
  confirm_password: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
