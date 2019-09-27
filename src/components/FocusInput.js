import React, { useRef, useEffect } from 'react';

function FocusInput() {
  const focusedIn = useRef(null);

  useEffect(() => {
    focusedIn.current.focus();
  }, []);

  return (
    <div>
      <input type='text' ref = { focusedIn } />      
    </div>
  )
}

export default FocusInput;
