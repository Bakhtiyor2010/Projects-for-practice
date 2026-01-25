import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NasaPhoto from './components/NasaPhoto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nasaphoto" element={<NasaPhoto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
