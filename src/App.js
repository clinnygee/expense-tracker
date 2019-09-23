import React from 'react';
import Container from '../src/Components/Container/container';
import {BrowserRouter} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUtensils, faHome, faCar, faGamepad, faFileInvoiceDollar, faPhoneSquare, faNetworkWired, faGlassCheers, faTv, faStar, faWallet, faChartLine, faGift, faUndo, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faUtensils, faHome, faCar, faGamepad, faFileInvoiceDollar, faPhoneSquare, faNetworkWired, faGlassCheers, faTv, faStar, faWallet, faChartLine, faGift, faUndo, faMoneyCheckAlt);

function App() {
  return (
      <div>
        <BrowserRouter>
          <Container />
        </BrowserRouter>
          
      </div>
      
    
  );
}

export default App;
