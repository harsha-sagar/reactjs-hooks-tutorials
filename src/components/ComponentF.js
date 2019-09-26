import React, { Component } from 'react';

import { UserConsumer } from './UserContext';
import { CompanyConsumer } from './CompanyContext';

class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {
            (user) => {
              return <CompanyConsumer>
                {
                  (company) => {
                    return <div>user context is { user }, company context is { company }</div>
                  }  
                }
              </CompanyConsumer>
            }
          }
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentC;
