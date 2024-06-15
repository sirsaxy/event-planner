import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createEvent } from '../utils/api';

const CreateEvent = ({ token }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      date: '',
      location: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      description: Yup.string(),
      date: Yup.string().required('Required'),
      location: Yup.string().required('Required')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await createEvent(values);
        console.log('Event created:', response);
        resetForm();
      } catch (err) {
        console.error('Error creating event:', err);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Title"
          required
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Description"
        />
        {formik.touched.description && formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="datetime-local"
          id="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.date && formik.errors.date ? (
          <div>{formik.errors.date}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Location"
          required
        />
        {formik.touched.location && formik.errors.location ? (
          <div>{formik.errors.location}</div>
        ) : null}
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;
