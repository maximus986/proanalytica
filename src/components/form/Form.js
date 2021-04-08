/** @jsx jsx */
import styled from '@emotion/styled';
import { Grid, jsx, Spinner, useThemeUI } from 'theme-ui';
import { Field } from './Field';
import { Button } from 'components';
import { useState } from 'react';
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  phone: '',
  city: '',
  address: '',
  message: '',
};

export const Form = () => {
  const [formValue, setFormValue] = useState(defaultValues);

  const handleChange = (e) => {
    e.persist();
    setFormValue((formValue) => ({
      ...formValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formValue,
      }),
    })
      .then(() => alert('success'))
      .catch((error) => alert(error));
  };
  const loading = false;

  return (
    <SignUpForm
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <Grid gap={[0, null, null, 6]} columns={[null, null, null, 2]}>
        <div>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="firstName"
              placeholder="Ime*"
              onChange={handleChange}
              value={formValue.firstName}
            />
          </FormGroup>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="lastName"
              placeholder="Prezime*"
              onChange={handleChange}
              value={formValue.lastName}
            />
          </FormGroup>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="email"
              placeholder="Email*"
              onChange={handleChange}
              value={formValue.email}
            />
          </FormGroup>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="company"
              placeholder="Naziv vase firme*"
              onChange={handleChange}
              value={formValue.company}
            />
          </FormGroup>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="phone"
              placeholder="Broj telefona*"
              onChange={handleChange}
              value={formValue.phone}
            />
          </FormGroup>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="city"
              placeholder="Grad*"
              onChange={handleChange}
              value={formValue.city}
            />
          </FormGroup>
          <FormGroup sx={{ mb: [6, null, null, 0] }}>
            <Field
              name="address"
              placeholder="Adresa*"
              onChange={handleChange}
              value={formValue.address}
            />
          </FormGroup>
        </div>
        <div>
          <Textarea
            type="text"
            name="message"
            placeholder="Vasa poruka*"
            onChange={handleChange}
            value={formValue.message}
            sx={{
              color: 'textPrimary',
              fontFamily: 'body',
              borderColor: 'muted',
              fontSize: 2,
              padding: 4,
              '&:focus': {
                outline: 'none',
                borderColor: 'primary',
              },
            }}
          />
        </div>
      </Grid>
      <div
        sx={{
          display: 'flex',
          justifyContent: ['center', null, null, 'flex-start'],
          mt: 6,
        }}
      >
        <button
          type="submit"
          name="submit"
          variant="primary"
          disabled={false}
          sx={{ width: '100%' }}
        >
          {loading ? (
            <Spinner
              title="Loading"
              size={24}
              strokeWidth={2}
              sx={{ color: 'secondary' }}
            />
          ) : (
            <span>Pošalji</span>
          )}
        </button>
      </div>
    </SignUpForm>
  );
};

const SignUpForm = styled.form``;

const Col = styled.div``;

const FormGroup = styled.div``;

const Label = styled.label``;

const Textarea = styled.textarea`
  height: 100%;
  border-width: 1px;
  border-style: solid;
  width: 100%;
  resize: none;
`;
