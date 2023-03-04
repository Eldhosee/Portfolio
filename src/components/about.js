import React from 'react'
import "./about.css"
import { Card } from '@mui/material';
import { Box } from '@mui/material';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';



export default function About() {
  return (
    <>
      <h1 id="about">About</h1>
      <br />
      <Box className="container4">
        <Box sx={{ width: "100%", height: "auto" }}>
          <p id="p">My portfolio website is a collection of my work samples, achievements, and skills presented in a digital format. It is a great way to showcase my talent and abilities to potential clients, employers, or collaborators. </p>
        </Box>
        <Box sx={{ width: "100%", height: "100px" }} className="icon">
          <br />
          <Card>
            <a href="https://github.com/Eldhosee">
              <img src={github} alt="logo" className='aboutimg' />
            </a>
          </Card>
          <Card >
            <a href="https://www.linkedin.com/in/eldhose-iype-a02145214/">
              <img src={linkedin} alt="logo" className='aboutimg' />
            </a>
          </Card>
        </Box>
      </Box>
    </>
  )
}
