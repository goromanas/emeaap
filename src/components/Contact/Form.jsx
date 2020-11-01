import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'
import styled from 'styled-components'
import Recaptcha from 'react-recaptcha'
import { message, Input, Button, Form as AntForm, AutoComplete } from 'antd'
import { UserOutlined, MailOutlined } from '@ant-design/icons'

import { colors } from '../config/colors'
import countries from './countries.json'

const URL =
  'http://emeaap.eu/backend/wp-json/contact-form-7/v1/contact-forms/41/feedback'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 2rem 4rem 0 4rem;
  background: ${({ colors }) => colors.white};
`

const { TextArea } = Input

const Form = ({ className }) => {
  const [verified, setVerified] = useState(false)
  const [country, setCountry] = useState('')

  function handleVerify() {
    setVerified(true)
  }

  const onChange = data => {
    setCountry(data)
  }

  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js'
  script.async = true
  script.defer = true
  document.body.appendChild(script)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      country: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: async values => {
      try {
        const data = new FormData()
        data.append('your-name', values.name)
        data.append('your-email', values.email)
        data.append('your-country', country)
        data.append('your-message', values.message)
        await Axios.post(URL, data)
        message.success('Thank you! We will reach out to you soon.')
        formik.resetForm()
      } catch (e) {
        message.error('Something went wrong. Please try again.')
      }
    },
  })
  return (
    <StyledForm
      onSubmit={formik.handleSubmit}
      colors={colors}
      className={className}
    >
      <AntForm.Item
        validateStatus={
          formik.touched.name && formik.errors.name
            ? 'error'
            : !formik.errors.name
        }
        hasFeedback={formik.touched.name && !formik.errors.name}
        help={formik.errors.name}
      >
        <label htmlFor="name">Your name</label>
        <Input
          allowClear
          required
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          prefix={<UserOutlined />}
          rules={formik.touched.name && formik.errors.name}
        />
      </AntForm.Item>

      <AntForm.Item
        validateStatus={
          formik.touched.email && formik.errors.email ? 'error' : null
        }
        help={formik.errors.email}
      >
        <label htmlFor="email">Email Address</label>
        <Input
          allowClear
          required
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          prefix={<MailOutlined />}
        />
      </AntForm.Item>
      <AntForm.Item>
        <label htmlFor="country">Your country</label>
        <AutoComplete
          allowClear
          id="country"
          name="country"
          value={country}
          options={countries}
          onChange={onChange}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </AntForm.Item>

      <AntForm.Item
        validateStatus={
          formik.touched.message && formik.errors.message ? 'error' : null
        }
        help={formik.errors.message}
      >
        <label htmlFor="message">Message</label>

        <TextArea
          allowClear
          required
          rows={4}
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
      </AntForm.Item>
      <AntForm.Item>
        <Recaptcha
          sitekey="6LcN0N0ZAAAAAP8ePPX8WDGIlZignVtzQh5_RR1F"
          verifyCallback={() => handleVerify()}
        />
      </AntForm.Item>

      <Button
        htmlType="submit"
        type="primary"
        colors={colors}
        disabled={!verified}
      >
        Send message
      </Button>
    </StyledForm>
  )
}

export default Form
