import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import styles from './App.module.css';

export default function App() {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1>Книга контактів</h1>
        <p>Додавайте, шукайте та зберігайте контакти у своєму браузері.</p>
      </div>
      <div className={styles.layout}>
        <section className={styles.card} aria-labelledby="add-heading">
          <h2 id="add-heading">Новий контакт</h2>
          <ContactForm />
        </section>
        <section className={styles.card} aria-labelledby="list-heading">
          <h2 id="list-heading">Мої контакти</h2>
          <SearchBox />
          <ContactList />
        </section>
      </div>
    </main>
  );
}
