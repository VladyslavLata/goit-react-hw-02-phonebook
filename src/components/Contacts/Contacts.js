export const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <h3>{name}</h3>
          <p>{number}</p>
          <button type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
