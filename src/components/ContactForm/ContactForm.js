import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export const ContactForm = ({ name = '', number = '', onSubmit, btnText }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();
    const contact = { name, number };

    onSubmit(contact);
    setContactName('');
    setContactNumber('');
    form.reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setContactName(value);
        break;

      case 'number':
        setContactNumber(value);
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
        label="Number"
        name="number"
        type="phone"
        size="small"
        sx={{ width: '100%' }}
        onChange={handleChange}
        value={contactNumber}
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
