/** @jsx jsx */
import styled from '@emotion/styled';
import { Grid, jsx, Spinner, useThemeUI } from 'theme-ui';
import { Field } from './Field';
import { useState } from 'react';
import { navigate } from 'gatsby-link';
import { useForm } from 'react-hook-form';

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

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({ defaultValues, mode: 'onBlur' });

  const submit = (data, e) => {
    console.log(e);
    e.preventDefault();
    console.log(isSubmitting, isValid);
    // reset(defaultValues);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...data,
      }),
    })
      .then(() => {
        navigate(form.getAttribute('action'));
        reset(defaultValues);
      })
      .catch((error) => alert(error)); // TODO: Handle errors
  };
  const loading = false;

  const {
    theme: { buttons },
  } = useThemeUI();

  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <Grid gap={[0, null, null, 6]} columns={[null, null, null, 2]}>
        <div>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="firstName"
              placeholder="Ime*"
              register={register}
              validation={{
                required: 'Ovo polje je obavezno.',
              }}
            />
            <ErrorMessage>
              {errors.firstName && errors.firstName.message}
            </ErrorMessage>
          </FormGroup>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="lastName"
              placeholder="Prezime*"
              register={register}
              validation={{
                required: 'Ovo polje je obavezno.',
              }}
            />
            <ErrorMessage>
              {errors.lastName && errors.lastName.message}
            </ErrorMessage>
          </FormGroup>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="email"
              placeholder="Email*"
              register={register}
              validation={{
                required: 'Ovo polje je obavezno.',
                pattern: {
                  value: emailRegex,
                  message: 'Uneti email nije validan.',
                },
              }}
            />
            <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
          </FormGroup>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="company"
              placeholder="Naziv vase firme*"
              register={register}
              validation={{
                required: 'Ovo polje je obavezno.',
              }}
            />
            <ErrorMessage>
              {errors.company && errors.company.message}
            </ErrorMessage>
          </FormGroup>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="phone"
              placeholder="Broj telefona*"
              register={register}
              validation={{
                required: 'Ovo polje je obavezno.',
                pattern: {
                  value: phoneNumberRegex,
                  message: 'Uneti telefonski broj nije validan.',
                },
              }}
            />
            <ErrorMessage>{errors.phone && errors.phone.message}</ErrorMessage>
          </FormGroup>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="city"
              placeholder="Grad*"
              register={register}
              validation={{
                required: 'Ovo polje je obavezno.',
              }}
            />
            <ErrorMessage>{errors.city && errors.city.message}</ErrorMessage>
          </FormGroup>
          <FormGroup sx={{ mb: 6 }}>
            <Field
              name="address"
              placeholder="Adresa*"
              register={register}
              validation={{
                required: 'Ovo polje je obavezno.',
              }}
            />
            <ErrorMessage>
              {errors.address && errors.address.message}
            </ErrorMessage>
          </FormGroup>
        </div>
        <div sx={{ mb: 6 }}>
          <Textarea
            type="text"
            name="message"
            placeholder="Vasa poruka*"
            {...register('message', { required: 'Ovo polje je obavezno.' })}
            sx={{
              color: 'textPrimary',
              fontFamily: 'body',
              borderColor: 'muted',
              fontSize: 2,
              padding: 4,
              height: ['300px', null, null, '100%'],
              '&:focus': {
                outline: 'none',
                borderColor: 'primary',
              },
            }}
          />
          <ErrorMessage>
            {errors.message && errors.message.message}
          </ErrorMessage>
        </div>
      </Grid>
      <div
        sx={{
          display: 'flex',
          justifyContent: ['center', null, null, 'flex-start'],
        }}
      >
        <SubmitButton
          type="submit"
          name="submit"
          // disabled={!isValid || isSubmitting}
          sx={{
            ...buttons.primary,
            fontSize: 2,
            fontFamily: 'body',
            '&:disabled': {
              bg: 'muted',
              boxShadow: `0 15px 15px rgba(233, 233, 233, 0.2)`,
              cursor: 'not-allowed',
              '&:hover': {
                transform: 'none',
              },
            },
          }}
        >
          {isSubmitting ? (
            <Spinner
              title="Loading"
              size={24}
              strokeWidth={2}
              sx={{ color: 'secondary' }}
            />
          ) : (
            <span>Pošalji</span>
          )}
        </SubmitButton>
      </div>
    </form>
  );
};

const FormGroup = styled.div``;

const Textarea = styled.textarea`
  border-width: 1px;
  border-style: solid;
  width: 100%;
  resize: none;
`;

const SubmitButton = styled.button`
  text-transform: capitalize;
  cursor: pointer;
  border: none;
`;

const ErrorMessage = ({ children }) => {
  return <p sx={{ fontSize: 1, color: 'alert', mt: 1 }}>{children}</p>;
};
