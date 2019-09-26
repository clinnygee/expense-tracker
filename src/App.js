import React from 'react';
import Container from '../src/Components/Container/container';
import {BrowserRouter} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUtensils, faHome, faCar, faGamepad, faFileInvoiceDollar, faPhoneSquare, faNetworkWired, faGlassCheers, faTv, faStar, faWallet, faChartLine, faGift, faUndo, faMoneyCheckAlt, faEdit, faTrashAlt, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import {UserProvider} from './user-context';
import {UserConsumer} from './user-context';
library.add(faUtensils, faHome, faCar, faGamepad, faFileInvoiceDollar, faPhoneSquare, faNetworkWired, faGlassCheers, faTv, faStar, faWallet, faChartLine, faGift, faUndo, faMoneyCheckAlt, faEdit, faTrashAlt, faSortDown, faSortUp);

function App() {
  return (
      <div>
        <BrowserRouter>
          <UserProvider >
            <UserConsumer>
              {context => (
                <Container 
                      setJwt={context.setJwt}
                      logInSuccess={context.logInSuccess} 
                      authenticated={context.authenticated}/>
              )}
            </UserConsumer>
            
          </UserProvider>          
        </BrowserRouter>
          
      </div>
      
    
  );
}

export default App;
