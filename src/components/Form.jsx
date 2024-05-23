import { Box, Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

export const Form = ({ handleClick, title }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <Container>
      <Grid p={2}>
        <TextField
          variant="standard"
          label="email"
          margin="dense"
          fullWidth
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          variant="standard"
          label="password"
          margin="dense"
          fullWidth
          type="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <Box my={2}>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => handleClick(email, pass)}
          >
            {title}
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};
