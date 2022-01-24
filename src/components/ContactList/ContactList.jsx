import PropTypes from 'prop-types';
import { Container, Item } from './ContactList.styled';

export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <Container>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <Item key={id}>
                        {name}: {number}
                        <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                    </Item>
                ))}
                </ul>
        </Container>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}