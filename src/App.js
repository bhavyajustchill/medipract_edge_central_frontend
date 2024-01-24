import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Components/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/index" element={<Index />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
