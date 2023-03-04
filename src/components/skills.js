import React from 'react';
import './skill.css';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon7 from '../assets/icon7.png';
import icon8 from '../assets/icon8.png';
import icon9 from '../assets/icon9.png';
import { ImageList, ImageListItem} from '@mui/material'
import { useMediaQuery } from '@mui/material';
export const Skills = () => {
  const images = [
    {
      id: 1,
      src: icon1,
      alt: 'icon1'
    },
    {
      id: 2,
      src: icon2,
      alt: 'icon2'
    },
    {
      id: 3,
      src: icon3,
      alt: 'icon3'
    },
    {
      id: 4,
      src: icon4,
      alt: 'icon4'
    },
    {
      id: 5,
      src: icon5,
      alt: 'icon5'
    },
    {
      id: 6,
      src: icon6,
      alt: 'icon6'
    },
    {
      id: 7,
      src: icon7,
      alt: 'icon7'
    },
    {
      id: 8,
      src: icon8,
      alt: 'icon8'
    },
    {
      id: 9,
      src: icon9,
      alt: 'icon9'
    }
  ];
  
  const matches = useMediaQuery('(min-width:600px)');
  const columns = matches ? 5 : 2;

  return (
    <div className='container2'>
      <h1 id="skills">Skills</h1>
      <ImageList sx={{width:"100%",height:500,overflow:"visible",m:"3%"}} cols={columns} gap={8} >
      {images.map((item) => (
        <ImageListItem key={item.id} id="img">
          <img
          className='img'
            src={item.src}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </div>

  );
  
};
