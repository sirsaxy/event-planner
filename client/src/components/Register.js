import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      role: 'Coordinator', // Default role
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await register(values);
        console.log('User registered:', response);
        navigate('/login');
      } catch (err) {
        console.error('Error registering user:', err);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Name"
          required
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
          required
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Password"
          required
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select
          name="role"
          value={formik.values.role}
          onChange={formik.handleChange}
        >
          <option value="Coordinator">Coordinator</option>
          <option value="Guest">Guest</option>
          <option value="Vendor">Vendor</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
