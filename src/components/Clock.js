import React, { useState, useEffect } from 'react';
import './Title.css';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect( () => {
    function tick () {
        setDate(new Date());
    };

    setInterval(tick, 1000);

    return function () {
        clearInterval();
    }
  })



    return (
        <div className="title">
          <h1>The clock!</h1>
          <h2>Now {date.toLocaleTimeString()}</h2>
        </div>
      );
}
export default Clock;