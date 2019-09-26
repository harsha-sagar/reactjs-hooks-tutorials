import React from 'react';

function Info({ field, val }) {
  console.log(`inside info: ${field}`);

  return (
    <div>
    	{ field }: { val }
    </div>
  );
}

export default React.memo(Info);
