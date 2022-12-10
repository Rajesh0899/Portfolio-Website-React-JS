import { Box, Typography } from '@mui/material'

import React from 'react'
import { skillList } from '../utilites/static'
import Footer from './Footer'

const Skills = () => {
  return (
    <div id='Skills'  style={{minHeight:'auto '}}>
    
       <Box    height='100px' display='flex' justifyContent='start' alignItems='center' color='whitesmoke'>
       <Typography variant='h4' style={{border:'2px solid #CB480A', borderRadius:'50px', padding:'0px 20px'}}  fontWeight={'bold'} mx={10}  >Skills</Typography>
       </Box>
       <Box   minHeight='auto' minWidth='100%' display='flex' flexDirection={{xs:'column', md:'row', lg:'row'}}  color='whitesmoke' flexWrap='wrap'>

      <Box display='flex' direction={{xs:'column', md:'row'}} flexWrap='wrap' gap={2} justifyContent='center' style={{padding:'20px', paddingTop:'0px',}}>

         {skillList.map((skill, index) => (
          <Box key={index}  style={{  width:'auto', height:'60px', background:'#7996FC', display:"flex", flexDirection:'row', flexWrap:'nowrap', border:'1px solid white', borderRadius:'15px'}} >
         
              <div style={{width:'50px', height:'60px', padding:'5px'  }} >
                      <img src={skill.icon} alt={skill.name} style={{width:'100%', height:'100%', borderRadius:'inherit'}} />
              </div>
             <Box style={{width:'auto', minHeight:'60px',  padding:'20px' }} alignItems='center' justifyContent={'center'} display='flex'  >
              <Typography variant='h6'>{skill.name} </Typography>
             </Box>

          </Box>
         ))}

         </Box>


       </Box>
       <Footer/>
   </div>
  )
}

export default Skills