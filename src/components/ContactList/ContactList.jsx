import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <>
      <div>
        <ul className={css.ul}>
          {contacts.map(contact => (
            <li key={contact.id} className={css.item}>
              <p className={css.txt}>
                {' '}
                <span className={css.name}>{contact.name}: </span>{' '}
                {contact.number}
              </p>

              {/* видалення */}
              <button
                className={css.btn}
                type="button"
                name="delete"
                onClick={() => removeContact(contact.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
