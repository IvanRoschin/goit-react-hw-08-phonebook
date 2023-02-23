import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const ContactForm = ({
  name = '',
  email = '',
  phone = '',
  onSubmit,
  btnText,
}) => {
  const [contactName, setContactName] = useState(name);
  const [contactPhone, setContactPhone] = useState(phone);
  const [contactEmail, setContactEmail] = useState(email);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const email = form.elements.email.value.trim();

    const contact = { name, phone, email };

    onSubmit(contact);
    setContactName('');
    setContactPhone('');
    setContactEmail('');

    form.reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setContactName(value);
        break;

      case 'phone':
        setContactPhone(value);
        break;

      case 'email':
        setContactEmail(value);
        break;

      default:
        return;
    }
  };
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '360px',
        width: '100%',
        p: '10px',
      }}
      autoComplete="off"
      required={true}
      error="true"
      validate="true"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Name"
        name="name"
        type="name"
        size="small"
        onChange={handleChange}
        value={contactName}
        sx={{ width: '100%' }}
        required
      />
      <TextField
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        label="Phone"
        name="phone"
        type="phone"
        size="small"
        sx={{ width: '100%' }}
        onChange={handleChange}
        value={contactPhone}
        required
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        size="small"
        sx={{ width: '100%' }}
        onChange={handleChange}
        value={contactEmail}
        required
      />

      <Button
        sx={{ width: '120px', mx: 'auto' }}
        type="submit"
        variant="outlined"
        size="small"
      >
        {btnText}
      </Button>
    </Box>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
