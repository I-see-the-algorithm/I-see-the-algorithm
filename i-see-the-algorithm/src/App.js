import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './styles/App.css';

import HomePage from './Screen/HomePage';
import StackPage from './Screen/DataStructures/StackPage';
import Sidebar from "./components/sidebar/Sidebar";
import Navigation from "./navigation/navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar/>
        <Navigation/>
      </div>
    </BrowserRouter>
  );
}

export default App;
