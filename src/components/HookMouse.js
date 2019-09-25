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
  }, []);


  return (
    <div>
      x: { x }
      <hr/>
      y: { y }       
    </div>
  );
}

export default HookMouse