

import React, { useState, useEffect } from 'react';

function Clock() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(tick, 1000);
    
    return () => clearInterval(timer);
  }, []);

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>    
    </div>
  );
}

export default Clock;
