import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/api';

const LoginPage = ({ setToken }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      try {
        const { token } = await login(values.email, values.password);
        localStorage.setItem('token', token);
        setToken(token);
        navigate('/events');
      } catch (err) {
        console.error('Error logging in:', err);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="Email"
        required
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="Password"
        required
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
