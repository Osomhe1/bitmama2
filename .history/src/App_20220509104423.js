import { useSelector } from 'react-redux';
import './App.css';
import Login from './component/Login';
import Logout from './component/Logout';
import { selectUser } from './featuers/slice';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="App">

{user ? <Logout /> :}
      
      
    </div>
  );
}

export default App;
