import React from 'react';
import classes from './Photo.module.css';

const Photo = (props) => {
    return (
        <div className={classes.card}>
        <div className={classes.first}>
          <div className={classes.title}>{props.foto.title}</div>
          <div className={classes.id}>{props.foto.id}</div>
        </div>
        <p className={classes.text}>Text</p>
        <a className={classes.url} href={props.foto.thumbnailUrl}>
          thumbnailUrl
        </a>
      </div>
    )
}

export default Photo;
