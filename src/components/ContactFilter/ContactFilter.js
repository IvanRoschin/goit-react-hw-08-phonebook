import { DebounceInput } from 'react-debounce-input';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterContainer, Filterlabel } from './ContactFilter.styled';
// import { useAddFilterMutation } from 'redux/filterSlice';

export const ContactFilter = () => {
  // const [addFilter] = useAddFilterMutation();
  // const handleSearch = e => {
  //   addFilter(e.target.value);
  // };
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FilterContainer>
      <Filterlabel>Find contacts by name</Filterlabel>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={handleSearch}
      />
    </FilterContainer>
  );
};
