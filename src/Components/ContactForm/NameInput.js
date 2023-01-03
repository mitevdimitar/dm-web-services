import React from 'react';
import TextField from '@mui/material/TextField';

export default function NameInput() {

  return (
    <TextField
        margin="normal"
        required
        fullWidth
        name="name"
        label="Name"
        id="name"
    />
  );
}