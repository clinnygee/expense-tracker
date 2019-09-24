import React from 'react';
import Container from '../src/Components/Container/container';
import {BrowserRouter} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUtensils, faHome, faCar, faGamepad, faFileInvoiceDollar, faPhoneSquare, faNetworkWired, faGlassCheers, faTv, faStar, faWallet, faChartLine, faGift, faUndo, faMoneyCheckAlt, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {UserProvider} from './user-context';
library.add(faUtensils, faHome, faCar, faGamepad, faFileInvoiceDollar, faPhoneSquare, faNetworkWired, faGlassCheers, faTv, faStar, faWallet, faChartLine, faGift, faUndo, faMoneyCheckAlt, faEdit, faTrashAlt);

function App() {
  return (
      <div>
        <BrowserRouter>
          <UserProvider >
            <Container />
          </UserProvider>          
        </BrowserRouter>
          
      </div>
      
    
  );
}

export default App;
