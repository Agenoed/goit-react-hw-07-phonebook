import { PropTypes } from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactListItem}>
      {name}: {number}
      <button
        className={css.contactListDeleteBtn}
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
