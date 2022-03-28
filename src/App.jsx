import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import LinkRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from './Context';
import { useState } from 'react';
import { useEffect } from 'react';
import AxiosInterceptor from './axios.interceptor';

function App() {
  const [ authenticated, setAuthenticated ] = useState(false);
  const [ nameUser, setNameUser ] = useState('');

  useEffect(() => {
    let token = sessionStorage.getItem('token') || localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
      loadAccount();
    }
  }, []);

  const loadAccount = () => {
    AxiosInterceptor.get('/api/account').then(res => {
      let data = res.data;
      setNameUser(data.firstName +" "+ data.lastName)
    }).catch(error => {})
  }

  return (
    <Context.Provider value={{
      authenticated,
      setAuthenticated,
      nameUser,
      setNameUser
    }}>
      <Router>
        <Header></Header>
        <LinkRoutes></LinkRoutes>
      </Router>
    </Context.Provider>
  );
}

export default App;
