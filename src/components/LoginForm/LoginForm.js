import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
// import { Formik } from 'formik';

// import {
//   Label,
//   Form,
//   InputName,
//   Field,
//   AddContactBtn,
// } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
    // <Formik onSubmit={handleSubmit}>
    //   <Form autoComplete="false">
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
    //     <AddContactBtn type="submit">Log In</AddContactBtn>
    //   </Form>
    // </Formik>
  );
};
