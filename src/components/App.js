import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContacts = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    const isName = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === normalizedName
    );

    if (isName) {
      return alert(`${name} is already in contacts.`);
    }

    const contact = {
      id: nanoid(6),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  //!доделать
  // deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contact.filter(contact => contact.id !== id)
  //   }));
  // };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getContact();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
