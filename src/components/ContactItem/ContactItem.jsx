import React from 'react';
import { ButtonDelete, ListItem } from './ContactItem.styled';
import PropTypes from 'prop-types';


const ContactItem = ({ name, number, onDeleteContact }) => (
  <ListItem>
    {name}: {number}
    <ButtonDelete type="button" onClick={onDeleteContact}>
      X
    </ButtonDelete>
  </ListItem>
);

export default ContactItem;

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};