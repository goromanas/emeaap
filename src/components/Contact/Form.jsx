import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'
import styled from 'styled-components'

import { colors } from '../config/colors'

const URL =
  'http://emeaap.eu/backend/wp-json/contact-form-7/v1/contact-forms/41/feedback'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`
const StyledInput = styled.input`
  outline: none;
  padding: 0.4rem;
  border: none;
  margin-bottom: 2rem;
`
const StyledButton = styled.button`
  background: ${({ colors }) => colors.darkBlue};
  color: ${({ colors }) => colors.white};
  border: none;
  box-shadow: none;
  cursor: pointer;
  padding: 0.4rem 0;
  transition: all 0.3s ease 0s;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
  }
`

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: async values => {
      try {
        const data = new FormData()
        data.append('your-name', 'tomas')
        data.append('your-email', 'tomas@tomas.lt')
        data.append('your-subject', 'Idomu')
        await Axios.post(URL, data)
        alert('submitted')
      } catch (e) {
        console.error(`There was an ${e} error.`)
      }
    },
  })
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Your name</label>
      <StyledInput
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <label htmlFor="lastName">Last Name</label>
      <StyledInput
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <StyledInput
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <StyledButton type="submit" colors={colors}>
        Submit
      </StyledButton>
    </StyledForm>
  )
}

export default Form
