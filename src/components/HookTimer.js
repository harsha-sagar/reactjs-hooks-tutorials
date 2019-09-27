import React, { useState, useEffect, useRef } from 'react';

function HookTimer() {
  const [ timer, setTimer ] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        return prevTimer + 1
      });
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <span>{ timer }</span>
      <br/>
      <button onClick = {() => clearInterval(intervalRef.current)}>Stop timer</button>
    </div>
  );
}

export default HookTimer;
