import React, { useState, useEffect } from 'react';
import classes from './Photo.module.css';
import Photo from './Photo';

function Photos() {
  const [state, setState] = useState([]);

  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((response) => response.json())
      .then((img) => setState(img));
  }, []);
  return (
    <>
      <div className={classes.container}>
        <main className={classes.main}>
          {state.map((foto) => {
            return (
                <Photo foto={foto}/>
            
            );
          })}
        </main>
      </div>
    </>
  );
}

export default Photos;