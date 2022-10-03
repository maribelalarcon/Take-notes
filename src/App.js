import { Box, Button, Stack, TextField } from '@mui/material';
import './App.css';
import Nav from './componentes/Nav';
import Tool from './componentes/Tool';
import  Login  from './componentes/Login';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Box className="App">
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route>
              <Route index path="/" element={
                  <Stack spacing={3} p={5}>
                    <Tool />
                    <TextField multiline rows={8} type="text" placeholder='Escribir'/>
                    <Button variant="contained">Guardar</Button>
                  </Stack>
                }/>
              <Route path='login' element={<Login />} />
              
            </Route>
          </Routes>
        </BrowserRouter>

        

    </Box>
      
  );
}

export default App;
