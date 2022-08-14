import { Component } from 'react';
import { Section } from './Section/Section';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-5', name: 'Kira Ferato', number: '222-10-20' },
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  reviewNameInContacts = name => {
    return this.state.contacts.find(contact => contact.name === name);
  };

  addContact = contact => {
    // console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(this.state);
  };

  removeContact = removeContactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== removeContactId
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ name: e.currentTarget.value.trimStart() });
  };

  getVisibleContacts = () => {
    const { contacts, name } = this.state;
    const nameNormalized = name.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameNormalized)
    );
  };

  render() {
    const { name } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <PhonebookForm
            onAddContact={this.addContact}
            onReviewName={this.reviewNameInContacts}
          />
        </Section>
        <Section title="Contacts">
          <Filter
            filterHeader="Find contacts by name"
            value={name}
            onChange={this.changeFilter}
          />
          <Contacts
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}
