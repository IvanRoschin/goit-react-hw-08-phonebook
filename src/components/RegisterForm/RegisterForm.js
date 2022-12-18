import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

// import { Formik } from 'formik';

// import {
//   Label,
//   Form,
//   InputName,
//   Field,
//   AddContactBtn,
// } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
    // <Formik onSubmit={handleSubmit}>
    //   <Form autoComplete="false">
    //     <Label>
    //       <InputName>Username</InputName>
    //       <Field name="name" type="tet" />
    //     </Label>
    //     <Label>
    //       <InputName>email</InputName>
    //       <Field name="email" type="email" />
    //     </Label>
    //     <br />
    //     <Label>
    //       <InputName>password</InputName>
    //       <Field name="password" type="password" />
    //     </Label>
    //     <br />
    //     <AddContactBtn type="submit">Register</AddContactBtn>
    //   </Form>
    // </Formik>
  );
};
