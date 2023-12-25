import { useState, useEffect } from 'react';
import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from './App.module.css';

// Початковий список контактів.
const contactsPhone = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  // Стан для зберігання значення фільтрації
  const [filter, setFilter] = useState('');

  // Стан для зберігання списку контактів, який оновлюється після взаємодії користувача

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? contactsPhone;
  });

  // Додає новий контакт до списку
  const addContact = newContact => {
    // Перевірка, чи новий контакт не дублюється з вже існуючими
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    // Оновлення списку контактів з новим контактом
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  // Видаляє контакт за його ідентифікатором
  const removeContact = contactId => {
    // Оновлення списку контактів, виключаючи видалений контакт
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  // Змінює значення фільтрації при введенні користувача
  const onChangeFilter = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  // Ефект, який відбувається після кожного оновлення стану контактів, зберігає дані в локальне сховище
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Фільтруємо контакти на основі значення поля пошуку
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Повертає розмітку для відображення на сторінці
  return (
    <>
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm addContact={addContact} />

        <h2 className={css.title}>Contacts</h2>
        <Filter name="filter" value={filter} onChangeFilter={onChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          removeContact={removeContact}
        />
      </div>
    </>
  );
};

export default App;
