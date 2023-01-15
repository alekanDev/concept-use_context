import './App.css';

// COMPONENTS
import Hijo from './components/Hijo';
import { UserProvider } from './context/UserProvider';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Hijo />
      </div>
    </UserProvider>
      
  );
}

export default App;
