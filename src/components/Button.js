import React from 'react';

function Button({ handleClick, field, children }) {
  console.log(`inside button: ${field}`);

  return (
    <div>
      <button onClick={ handleClick }>
        { children }
      </button>
    </div>
  );
}

export default React.memo(Button);
