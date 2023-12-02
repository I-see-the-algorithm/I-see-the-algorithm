import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

import HomePage from './Screen/HomePage';
import StackPage from './Screen/DataStructures/StackPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* nav bar or side bar */}
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/stack" element={<StackPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
