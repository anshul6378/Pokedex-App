import React, { useEffect } from 'react'
import InfoPage from './pages/InfoPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListPage from './pages/ListPage'; 

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<InfoPage />} />
          <Route path='/App' element={<InfoPage />} />
          <Route path='/pokemon' element={<ListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
  );
}

export default App;
