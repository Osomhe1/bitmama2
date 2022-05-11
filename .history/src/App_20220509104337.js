import { useSelector } from 'react-redux';
import './App.css';
import Login from './component/Login';

function App() {

  const user = useSelector()

  return (
    <div className="App">

      <Login />
      
    </div>
  );
}

export default App;
