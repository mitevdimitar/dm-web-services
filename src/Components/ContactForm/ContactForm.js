import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { email } from "../../Utils/emailkey";
import emailjs from '@emailjs/browser';
import NameInput from './NameInput';

export default function ContactForm() {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('mitev.dimitar', email.TEMPLATE_ID, form.current, email.USER_ID)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Send us a message
          </Typography>
          <Box component="form" ref={form} onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <NameInput />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
  );
}