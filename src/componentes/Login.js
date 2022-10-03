import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Login() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='Login-Container'>
        <h1>Registrarse</h1>  
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Usuario"
          
        />
      
        <TextField
          id="outlined-password-input"
          label="Contraseña"
          type="Password"
          autoComplete="current-password"
        />
        
       
    
      </div>
    </Box>
  );
}





