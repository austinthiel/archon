import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Text, Spacer } from '../shared';

const SignupForm = () => {
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;

    //todoajt async validate username
  };

  const initialValues = { email: '', password: '' };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Text>Email</Text>
            <Field type='email' name='email' />
            <ErrorMessage name='email' component='div' />

            <Spacer size='10' />

            <Text>Password</Text>
            <Field type='password' name='password' />
            <ErrorMessage name='password' component='div' />

            <Spacer size='10' />

            <Text>Username</Text>
            <Field type='username' name='username' />
            <ErrorMessage name='username' component='div' />

            <Spacer size='20' />

            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
