import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import { getStatusFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleChange = event => {
    dispatch(setStatusFilter(event.currentTarget.value));
  };
  return (
    <label className={css.filterLabel} htmlFor="filter">
      Find contacts by name
      <input
        className={css.filterName}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Write name for search"
      />
    </label>
  );
}
