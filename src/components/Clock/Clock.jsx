import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

function Clock({ title }) {
  const [date, setDate] = useState(new Date());

  function tick () {
    setDate(new Date());
  };

  useEffect( () => {
    setInterval(tick, 1000);

    return function () {
        clearInterval();
    }
  }, [])

  return (
      <div className={styles.title}>
        <h1>{title}</h1>
        <h2>Now {date.toLocaleTimeString()}</h2>
      </div>
    );
}

export default Clock;
