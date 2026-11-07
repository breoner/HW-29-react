# HW-29 React — Книга контактів

Домашнє завдання GoIT: книга контактів на React, Redux Toolkit і Redux Persist.

## Реалізовано
- Додавання контакту (ім’я та номер телефону), запобігання дублікатам за ім’ям.
- Видалення контакту.
- Фільтрація за ім’ям без збереження похідного списку у Redux.
- `configureStore`, `createSlice`, `react-redux` hooks.
- Redux Persist зберігає **тільки контакти** в localStorage, фільтр не зберігається.
- Власні CSS Modules для кожного компонента, PropTypes для компонента, що приймає props.

## Запуск
```bash
npm install
npm run dev
```

## Перевірка
```bash
npm run lint
npm run build
npm run format:check
```

## GitHub Pages
Налаштуйте GitHub Pages → Build and deployment → Source → **GitHub Actions**.
`vite.config.js` має `base: '/HW-29-react/'`, тому репозиторій повинен називатися `HW-29-react`.
Очікувана адреса: `https://breoner.github.io/HW-29-react/` **після успішного деплою**.

## Структура Redux
```js
{
  contacts: [{ id: '...', name: '...', number: '...' }],
  filter: ''
}
```
Redux Persist додає службове поле `_persist` до кореневого стану.
