import { useSelector } from 'react-redux';
import './App.css';
import Login from './component/Login';
import { selectUser } from './featuers/slice';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="App">

{}
      <Login />
      
    </div>
  );
}

export default App;
