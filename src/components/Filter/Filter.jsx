import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
    <div>
        <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChange} />
        </Label>
    </div>
);

Filter.protoType = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};