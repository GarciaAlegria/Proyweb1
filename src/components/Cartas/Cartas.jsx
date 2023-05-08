import React from "react";
import { styles, butt } from './Cartas.module.css';
import { PropTypes } from 'prop-types';

const Cartas = ({limagen, titulito, parafe, link}) => {
  return (
    <div className={styles}>
      <img src={limagen} alt="" /> 
      <div>
        {titulito}
      </div>
      <p>
        {parafe}
      </p>
      <a className={butt} href={link}>Read more</a>

    </div>
  )
}

export default Cartas