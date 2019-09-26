import React, { Component, useContext } from 'react';

import UserContext from './UserContext';
import CompanyContext from './CompanyContext';

function ComponentF() {
  const user = useContext(UserContext);
  const company = useContext(CompanyContext);

  return (
    <div>
      user: { user }, company: { company}
    </div>
  )
}

export default ComponentF;
