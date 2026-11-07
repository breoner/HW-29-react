import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.field}>
      <span>Пошук за ім’ям</span>
      <input type="search" placeholder="Знайти контакт…" value={filter} onChange={event => dispatch(setFilter(event.target.value))} />
    </label>
  );
}
