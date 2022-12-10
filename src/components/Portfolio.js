import React from 'react'

import { Typography, Box } from '@mui/material'
import { projectList } from '../utilites/static'


const Portfolio = () => {

  return (
   <div id='Projects'  style={{minHeight:'auto'}}>
    
       <Box    height='100px' display='flex' justifyContent='start' alignItems='center' color='whitesmoke'>
       <Typography variant='h4' style={{border:'2px solid #CB480A', borderRadius:'50px', padding:'0px 20px'}}  fontWeight={'bold'} mx={10} >Projects</Typography>
       </Box>
       <Box gap={{xs:2, md:2, lg:8}}   minHeight='auto' padding={'30px'} minWidth='100wh' display='flex' flexDirection={{xs:'column', md:'row', lg:'row'}} justifyContent='center' alignItems='center' color='whitesmoke'>
         
       {projectList.map((project, index) => (
        <Box key={index}  >
          <Box>
                    <Typography variant='h6'>
                    {project.title}
                    </Typography>
         </Box>
       <Box height={{xs:'150px', md:'230px', lg:'220px'}} width={{xs:'200px', md:'300px', lg:'350px'}} border ='1px solid' borderRadius='10px'   >
        <a href={project.url} target='_blank'>
       <img src={project.image} alt={project.title} style={{width:'100%', height:'100%', borderRadius:'10px'}} />
       </a>
       </Box>

       </Box>
        ))}

       </Box>
      
   </div>
  )
}

export default Portfolio