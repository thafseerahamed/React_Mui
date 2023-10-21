import React from 'react'
import Sidenav from '../components/Sidenav'
import { Box, Typography } from '@mui/material'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
     <Navbar/>
    <Box height={30}/>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About</h1>
        </Box>
</Box>
    </>

  )
}

export default About