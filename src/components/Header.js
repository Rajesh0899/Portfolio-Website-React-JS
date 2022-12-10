import React from 'react'
import { AppBar, Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { menu } from '../utilites/static'

const Header = () => {

  return (
    <Stack direction='row'  height='50px' justifyContent='center' alignItems='center' spacing={{ xs: 3, sm: 4, md: 6}} 
       sx={{background:'#212121',
            borderBottom:'1px solid grey'  }}
       >
      
        {menu.map((item, index) => (
          
          <a href={`#${item}`}>
         <Box key={index} >
         
           <Typography color='white'>
            {item}
          </Typography>
          
          </Box>
          </a>
        
        ))}
        
    </Stack>
  )
}

export default Header