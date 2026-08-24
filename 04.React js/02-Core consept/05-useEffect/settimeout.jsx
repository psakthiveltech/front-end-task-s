import React, { useEffect, useState } from 'react'

function Settimeout() {
    const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('⭐ Timer STARTED');
    
    const timer = setInterval(() => {
      console.log('⏰ TICK');
      setCount(c => c + 1);
      clearInterval(timer);

    }, 1000);  // Every 1 second
    
    return () => {
      console.log('🛑 Timer STOPPED');
      clearInterval(timer);
    };
  }, []);
  
  return <h1>Count: {count}</h1>;
}

export default Settimeout