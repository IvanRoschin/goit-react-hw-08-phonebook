import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  Label,
  Form,
  InputName,
  Field,
  AddContactBtn,
  ErrorMessageCustom,
} from './ContactForm.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .min(4, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
  phone: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .min(5, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
});

export const ContactForm = ({
  initialValues = { name: '', phone: '' },
  onSubmit,
  btnText,
}) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="false">
          <Label>
            <InputName>Name</InputName>
            <ErrorMessage name="name" component="span">
              {() => (
                <ErrorMessageCustom>
                  Please, type (4-30 letters)
                </ErrorMessageCustom>
              )}
            </ErrorMessage>
            <Field name="name" type="text" />
          </Label>
          <br />
          <Label>
            <InputName>Phone</InputName>
            <ErrorMessage name="phone" component="span">
              {() => (
                <ErrorMessageCustom>
                  Please, type (5-9 numbers)
                </ErrorMessageCustom>
              )}
            </ErrorMessage>
            <Field name="phone" type="text" />
          </Label>
          <br />
          <AddContactBtn type="submit" disabled={isSubmitting}>
            {btnText}
          </AddContactBtn>
        </Form>
      )}
    </Formik>
  );
};
