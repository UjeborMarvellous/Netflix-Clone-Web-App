import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './Components/Form';
import LandingPage from './Components/LandingPage';
function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/SignUp" element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
