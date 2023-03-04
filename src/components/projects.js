import React from 'react'
import './projects.css'
import { Grid, Card, CardContent, CardActionArea } from '@mui/material'

const Projects = () => {
    const projects=[
        {
            id:1,
            pro:"Recipie",
            url:"https://recipe111.netlify.app",
            des:"A website that is used to fetch recipie details using rapid api",
            tech:"React,Rapid api,MUI"

        },
        {
            id:2,
            pro:"Movie Booking",
            url:"https://github.com/Eldhosee/moviebooking",
            des:"This website has the following features:Login,View movies,Select theater and seats, Payment,View booking history ",
            tech:"Python,Django,Bootstrap,Stripe,SQLite"

        },
        {
            id:3,
            pro:"News",
            url:"https://github.com/Eldhosee/moviebooking",
            des:"This website fetch news according to user needs like country,language,Topic",
            tech:"React,news api,MUI"
        },
        {
            id:3,
            pro:"Auction",
            url:"https://github.com/Eldhosee/Auction",
            des:"This webiste allows to add an item for aution close the aution and allow to bid for different items",
            tech:"Python,Django,Bootstrap,SQLite"
        }
    ]
  return (
    <div className='container3'>
      <h1 id="projects">Projects</h1>
      <br/>
      <Grid container spacing={2}>
      {projects.map((card) => (
        <Grid item xs={12} sm={3}  key={card.id}>
          <Card sx={{background: "#2b2d42",ml:"5%" ,height:"220px",
        "@media (max-width:400px)":{
            height:"260px"
        }}} id="cards">
            <CardActionArea  href={card.url}>
            <CardContent>
              <h2 id="heading">{card.pro}</h2>
              <p id="des">{card.des}</p>
              <p id="tech">Technology Used : {card.tech}</p>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    <br/><br/>
      </div>
  )
}

export default Projects