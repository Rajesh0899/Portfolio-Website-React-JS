import { Stack, Box, Typography, Button, Grid } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import SendSharpIcon from '@mui/icons-material/SendSharp';

import React from 'react'

import '../index.css'
import Portfolio from './Portfolio'
import Skills from './Skills'

import { Profile } from '../utilites/static';

const About = () => {
  return (
    <>
    <Stack direction={{xs:'column', md:'row', lg:'row'}} minHeight='75vh'>
     
    <Box minWidth={'50%'} minHeight={{xs:'50vh', md:'auto'}}  display='flex' flexDirection='row'  alignItems='center' justifyContent='center' sx={{}}>
      <Box height={{xs:'220px',sm:'250px', md:'300px'}} width={{xs:'220px', sm:'250px', md:'300px'}}  style={{   borderRadius:'50%'   }}>
         <img src={Profile} width='100%' height={'100%'} style={{borderRadius:'50%'}} alt='Rajesh reddy' />
      </Box>
    </Box>
    <Box minWidth='50%'  gap={5} display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{}}>
      <Grid container width='80%' >
        <Typography fontWeight='300'   color='whitesmoke' sx={{fontSize:{sx:"70px", md:"40px", sm:'50px'}}} >
          <span style={{fontStyle:'italic'}} >Hello, I`m a <br/></span>
          <span style={{fontWeight:'bold'}}>Front-End React Developer</span><br/>
          <span style={{fontWeight:'bold'}}>Rajesh</span>
        </Typography>
      </Grid>
      <Grid container direction='row' spacing={2}  width='80%' >
       <Grid item xs={12} sm={12} md={6} lg={6}   height='85px' >
       <a href='https://drive.google.com/drive/folders/1t1-0nZzuIcAEdyQZNiNjxT3hkluIsYcB' target='_blank'>
        <Box  bgcolor='#7996FC' borderRadius='15px' height='100%' display='flex' justifyContent='center'>
        <Button sx={{color:'white', textTransform:'none', fontSize:'20px' }} >Hire me &nbsp;  <EastIcon fontSize='large' />  </Button>
        </Box>
        </a>
       </Grid>
       <Grid item xs={12} sm={12} md={6} lg={6}   height='85px' >
       <a href='https://www.linkedin.com/in/rajesh-yerramareddy' target='_blank' >
        <Box bgcolor='#7996FC' borderRadius='15px' height='100%' display='flex' justifyContent='center'>
        <Button sx={{color:'white', fontSize:'20px', textTransform:'none'}} >Linkedin &nbsp;  <EastIcon fontSize='large' /></Button>
        </Box>
       </a>
       </Grid>
       <Grid item xs={12} sm={12} md={12} lg={12} height='85px' >
       <a href='https://wa.me/+916301706083' target='_blank'>
       <Box bgcolor='#7996FC' borderRadius='15px' height='100%' display='flex' justifyContent='center'>
        <Button sx={{color:'white', fontSize:'20px', textTransform:'none'}} > <SendSharpIcon fontSize='large' /> &nbsp; Get in Touch by Whatsapp &nbsp;  <EastIcon fontSize='large' /></Button>
        </Box>
        </a>
       </Grid>
      </Grid>
    </Box>
        
  </Stack>
  <Box paddingX={10} paddingY={5}  style={{textAlign:'center', fontStyle:'italic'}}>
    <Typography variant='h5'color={'whitesmoke'} > "The Life of a Web Developer is constant struggle to create a beautiful design with responsive website" </Typography>
  </Box>
  <Portfolio/>
  <Skills/>
  </>
  )
    
  
}

export default About