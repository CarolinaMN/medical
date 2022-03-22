import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import LinkRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <LinkRoutes></LinkRoutes>
    </Router>
    
  );
}

export default App;
