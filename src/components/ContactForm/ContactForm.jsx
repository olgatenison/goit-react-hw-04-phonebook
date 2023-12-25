import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  // Стани для відстеження імені та номера телефону
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Функція, яка викликається при зміні вмісту інпутів
  const handleChange = evt => {
    const { name, value } = evt.target;
    // Залежно від імені інпута, встановлюємо відповідний стан
    name === 'name' ? setName(value) : setNumber(value);
  };

  // Функція, яка викликається при подачі форми
  const handleSubmit = evt => {
    evt.preventDefault();

    // Створення нового контакту з отриманими даними та унікальним ідентифікатором
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    // Передача нового контакту до батьківського компонента
    addContact(newContact);

    // Очищення стану після подачі форми
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            className={css.input}
          />
        </label>

        <label>
          Number:
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
