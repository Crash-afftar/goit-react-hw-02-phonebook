import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './ContactFilter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name:
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};