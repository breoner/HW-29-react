import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/selectors';
import styles from './ContactForm.module.css';

const phonePattern = /^[+\d()\s-]{3,25}$/;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanNumber = number.trim();

    if (!cleanName || !cleanNumber) {
      setError('Заповніть ім’я та номер телефону.');
      return;
    }
    if (!phonePattern.test(cleanNumber)) {
      setError('Перевірте формат номера телефону.');
      return;
    }
    if (contacts.some(contact => contact.name.toLocaleLowerCase() === cleanName.toLocaleLowerCase())) {
      setError(`Контакт «${cleanName}» вже є у списку.`);
      return;
    }

    dispatch(addContact(cleanName, cleanNumber));
    setName('');
    setNumber('');
    setError('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={styles.field}>
        <span>Ім’я</span>
        <input type="text" name="name" value={name} onChange={event => { setName(event.target.value); setError(''); }} placeholder="Наприклад, Олена" autoComplete="name" maxLength={80} required />
      </label>
      <label className={styles.field}>
        <span>Номер телефону</span>
        <input type="tel" name="number" value={number} onChange={event => { setNumber(event.target.value); setError(''); }} placeholder="+380 00 000 00 00" autoComplete="tel" required />
      </label>
      {error && <p className={styles.error} role="alert">{error}</p>}
      <button className={styles.submit} type="submit">Додати контакт</button>
    </form>
  );
}
