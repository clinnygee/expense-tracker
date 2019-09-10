import React from 'react';
import Container from '../src/Components/Container/container';
import {BrowserRouter} from 'react-router-dom';



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
