import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Filter = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <Box
      width="50%"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6" component="h2" color="#1976d2">
        Find contact by name
      </Typography>
      <TextField
        id="standard-search"
        type="search"
        variant="standard"
        onChange={handleSearch}
      />
    </Box>
  );
};

export default Filter;
