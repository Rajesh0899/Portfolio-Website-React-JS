import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  
  return (
    <div>
        <Box gap={5} padding={'30px'}  flexDirection='row'   justifyContent='center' alignItems={'center'} style={{ width:'100%', height:'auto', background:'#414141', borderTopRightRadius:'50px', borderTopLeftRadius:'50px', display:'flex'}} >
         
           <a href='mailto:rajesh0899@outlook.com' target='_blank'>
           <span style={{color:'red'}}>Contact us &nbsp; <span style={{color:'white'}}> Click here </span> </span>
            <Typography variant='h6' color='white' >
               Rajesh0899@outlook.com
            </Typography>
            </a>

         

        </Box>
    </div>
  )
}

export default Footer