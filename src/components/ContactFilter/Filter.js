import { DebounceInput } from 'react-debounce-input';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { FilterContainer, Filterlabel } from './Filter.styled';

export const Filter = () => {
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
