import react, { useState } from 'react';
import GlobalContext from './Contexts/GlobalContext';
import Dashboard from './Pages/Dashboard';
import LoginPage from './Pages/LoginPage';

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  const login = (e) => {
    setLoginStatus(prev => !prev);
  }

  const tools = {
    loginStatus,
    login
  }

  switch(loginStatus){
    case true:
      return (
        <GlobalContext.Provider value={tools}>
          <Dashboard/>
        </GlobalContext.Provider>
      );
      break;
    case false:
      return (
        <GlobalContext.Provider value={tools}>
          <LoginPage/>
        </GlobalContext.Provider>
      )
  }
}

export default App;
