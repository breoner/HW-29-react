import { useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectVisibleContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);

  if (contacts.length === 0) {
    return <p className={styles.empty}>Контактів поки немає. Додайте перший контакт.</p>;
  }

  return (
    <>
      <p className={styles.count}>Знайдено: {visibleContacts.length} із {contacts.length}</p>
      {visibleContacts.length ? (
        <ul className={styles.list}>
          {visibleContacts.map(contact => <Contact key={contact.id} contact={contact} />)}
        </ul>
      ) : (
        <p className={styles.empty}>За запитом «{filter}» нічого не знайдено.</p>
      )}
    </>
  );
}
