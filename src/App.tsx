import './App.css';
import { Main } from './container';
import { UserProvider } from './context/User.context';

function App() {

  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}

export default App;
