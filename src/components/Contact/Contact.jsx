import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <li className={styles.item}>
      <div className={styles.details}>
        <strong>{contact.name}</strong>
        <a href={`tel:${contact.number.replace(/[^+\d]/g, '')}`}>{contact.number}</a>
      </div>
      <button className={styles.delete} type="button" onClick={() => dispatch(deleteContact(contact.id))} aria-label={`Видалити ${contact.name}`} title="Видалити контакт">Видалити</button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
