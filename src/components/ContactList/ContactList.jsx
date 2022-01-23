// import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <li key={id}>
                        {name}: {number}
                        <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                ))}
                </ul>
        </>
    );
};