import React from 'react';
import '../Styles/App.css';
import ModalProvider from './Modals/ModalProvider';
import Modals from './Modals/Modals';
import CountryContainer from './CountryContainer/CountryContainer';
 
function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Modals/>
        <CountryContainer/>
      </ModalProvider>
    </div>
  );
}

export default App;
