import { Box} from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Header, About,  } from './components'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <Box sx={{background:'#212121'}}>
     
         <Routes>
          <Route path='/' exact element={<About/>}/>
          {/* <Route path='/about' exact element={<About/>}/>
          <Route path='/portfolio' exact element={<Portfolio/>}/>
          <Route path='/reference' exact element={<Reference/>}/>
          <Route path='/contact' exact element={<Contact/>}/> */}
         </Routes>
         </Box>
   
      </BrowserRouter>
    </div>
  );
}

export default App;
