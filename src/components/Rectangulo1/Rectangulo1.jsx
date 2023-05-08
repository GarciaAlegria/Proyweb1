import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { rectangulo1 } from './Rectangulo1.module.css'; 

const Rectangulo1 = () => {
    return (
        <div className={rectangulo1}>
        <p style={{fontFamily: 'Antenna', color: 'white', fontSize: '24px', margin: '0', fontWeight: '700', textAlign: 'center' }}>
          Explore Our Dog Food
        </p>
        <div style={{fontFamily: 'inherit', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <Button className='button' variant='outline-light' style={{ margin: '10px', color: 'black', backgroundColor: 'white', width: '150px' }}>
            PUPPY
          </Button>
          <Button className='button' variant='outline-light' style={{ margin: '10px', color: 'black', backgroundColor: 'white', width: '150px' }}>
            SENIOR DOG
          </Button>
          <Button className='button' variant='outline-light' style={{ margin: '10px', color: 'black', backgroundColor: 'white', width: '150px' }}>
            SMALL DOG
          </Button>
          <Button className='button' variant='outline-light' style={{ margin: '10px', color: 'black', backgroundColor: 'white', width: '150px' }}>
            GRAIN FREE 
          </Button>
          <Button className='button' variant='outline-light' style={{ margin: '10px', color: 'black', backgroundColor: 'white', width: '150px' }}>
            NATURAL
          </Button>
          <Button className='button' variant='outline-light' style={{ margin: '10px', color: 'white', backgroundColor: 'grey', width: '150px' }}>
            VIEW ALL
          </Button>
        </div>
      </div>
    )
}

export default Rectangulo1