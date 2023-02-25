import React from 'react';
import "./index.css"
import 'animate.css';
import img from "../assets/img01.png"

const Index = () => {
    return (

        <div className='container'>
            <div className='left'>
                <h1 >Hello,I'm Eldhose Iype</h1>
                <h2 id="h2">I'm a Full Stack Developer </h2>
                <p id="p2">A highly driven Information technology Junior, who loves to build web based projects and solving problems, seeking for an internship to extend my knowledge and experience by working on some real-world projects and by interacting with some highly experienced developers.</p>
            </div>
            <div className='right animate__animated animate__fadeIn'>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

                    <path fill="#EF233C" d="M39.1,-64.3C49.7,-53.9,56.9,-41.6,65.5,-28.3C74.1,-15,84.1,-0.7,82,11.6C80,23.9,65.8,34.3,54.4,46.6C42.9,58.8,34.2,72.8,21.3,79.9C8.4,87.1,-8.7,87.5,-24.2,82.8C-39.7,78.1,-53.7,68.3,-65,55.9C-76.3,43.6,-85,28.5,-88.3,12.1C-91.6,-4.3,-89.5,-22.1,-80.1,-34.1C-70.7,-46,-54.1,-52.2,-39.6,-60.8C-25,-69.4,-12.5,-80.4,0.8,-81.7C14.2,-83,28.4,-74.7,39.1,-64.3Z" transform="translate(100 100)" />

                </svg>
                <img src={img} className="img1" />

            </div>
        </div>
    )
}
export default Index