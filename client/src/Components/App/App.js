import React from 'react';
import Container from '../Routes/Landing';
import {BrowserRouter, Route} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faUtensils, faHome, faCar, faGamepad, faFileInvoiceDollar, faPhoneSquare, faNetworkWired, faGlassCheers, faTv, faStar, faWallet, faChartLine, faGift, faUndo, faMoneyCheckAlt, faEdit, faTrashAlt, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import {UserProvider} from '../../user-context';
import {UserConsumer} from '../../user-context';

library.add(faUtensils, faHome, faCar, faGamepad, faFileInvoiceDollar, faPhoneSquare, faNetworkWired, faGlassCheers, faTv, faStar, faWallet, faChartLine, faGift, faUndo, faMoneyCheckAlt, faEdit, faTrashAlt, faSortDown, faSortUp);


// in here should be a <Switch /> that chooses whether to render '/', '/create' etc.
function App() {
  return (
      <div>
        <BrowserRouter>
          <UserProvider >
            <Route path='/'>
            <UserConsumer>
              {context => (
                <Container 
                      authenticateUser={context.authenticateUser}
                      setJwt={context.setJwt}
                      logInSuccess={context.logInSuccess} 
                      authenticated={context.authenticated}/>
              )}
            </UserConsumer>
            </Route>
            
          </UserProvider>          
        </BrowserRouter>
          
      </div>
      
    
  );
}

export default App;
