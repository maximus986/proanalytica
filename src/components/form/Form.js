/** @jsx jsx */
import styled from '@emotion/styled';
import { Grid, jsx, Spinner, useThemeUI } from 'theme-ui';
import { Field } from './Field';
import { navigate } from 'gatsby-link';
import { useForm } from 'react-hook-form';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { ErrorMessage } from './ErrorMessage';

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
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ defaultValues, mode: 'onBlur', reValidateMode: 'onChange' });

  const { t, i18n } = useTranslation();

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
        navigate(`/${i18n.language}${form.getAttribute('action')}`);
        reset(defaultValues);
      })
      .catch(() => alert(t('serverError')));
  };

  return (
    <form
      name="contact"
      method="post"
      action="/servisno-aplikativna-podrska-primljen-zahtev/"
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
          <FormGroup>
            <Field
              name="firstName"
              placeholder={`${t('firstName')}*`}
              register={register}
              validation={{
                required: t('requiredField'),
              }}
              errors={errors.firstName}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="lastName"
              placeholder={`${t('lastName')}*`}
              register={register}
              validation={{
                required: t('requiredField'),
              }}
              errors={errors.lastName}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="email"
              placeholder={`${t('email')}*`}
              register={register}
              validation={{
                required: t('requiredField'),
                pattern: {
                  value: emailRegex,
                  message: t('notValidEmail'),
                },
              }}
              errors={errors.email}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="company"
              placeholder={`${t('company')}*`}
              register={register}
              validation={{
                required: t('requiredField'),
              }}
              errors={errors.company}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="phone"
              placeholder={`${t('phone')}*`}
              register={register}
              validation={{
                required: t('requiredField'),
                pattern: {
                  value: phoneNumberRegex,
                  message: t('notValidPhoneUmber'),
                },
              }}
              errors={errors.phone}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="city"
              placeholder={`${t('city')}*`}
              register={register}
              validation={{
                required: t('requiredField'),
              }}
              errors={errors.city}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="address"
              placeholder={`${t('addressService')}*`}
              register={register}
              validation={{
                required: t('requiredField'),
              }}
              errors={errors.address}
            />
          </FormGroup>
        </div>
        <FormGroup>
          <Textarea
            type="text"
            name="message"
            placeholder={`${t('message')}*`}
            {...register('message', { required: t('requiredField') })}
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
        </FormGroup>
      </Grid>
      <div
        sx={{
          display: 'flex',
          justifyContent: ['center', null, null, 'flex-start'],
        }}
      >
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};

const Textarea = styled.textarea`
  border-width: 1px;
  border-style: solid;
  width: 100%;
  resize: none;
`;

const StyledSubmitButton = styled.button`
  text-transform: capitalize;
  cursor: pointer;
  border: none;
`;

const FormGroup = ({ children }) => <div sx={{ mb: 6 }}>{children}</div>;

const SubmitButton = ({ isSubmitting }) => {
  const {
    theme: { buttons },
  } = useThemeUI();
  const { t } = useTranslation();
  return (
    <StyledSubmitButton
      type="submit"
      name="submit"
      sx={{
        ...buttons.primary,
        fontSize: 2,
        fontFamily: 'body',
        width: ['100%', null, null, '220px'],
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
        <span>{t('submit')}</span>
      )}
    </StyledSubmitButton>
  );
};
