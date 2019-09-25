import React, { useState, useEffect } from 'react'

function HookMouse() {

  const [x, SetX] = useState(0);
  const [y, SetY] = useState(0);

  const logMousePosition = (e) => {
    console.log('logging mouse position');
    SetX(e.clientX);
    SetY(e.clientY);
  }

  useEffect(() => {
    console.log('inside useEffect');
    window.addEventListener('mousemove', logMousePosition);
    return () => {
      console.log('inside useEffect cleanup');
      window.removeEventListener('mousemove', logMousePosition);
    }
  }, []);


  return (
    <div>
      <hr/>
      x: { x }, y: { y }       
    </div>
  );
}

export default HookMouse