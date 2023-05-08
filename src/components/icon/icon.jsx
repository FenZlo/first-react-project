import React from "react";
import classes from './icon.module.css';

const Icon = (props) => {
  const name = props.name;
  if (!name) {
    return null
  }
  return (
    <img className={classes.icon} src={`./icons/${name}.png`} alt={name}/>
  )
}
  
export default Icon; 