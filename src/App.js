
import './App.css';
import Home from './component/home/home';
import Login from './component/login/login';
import Register from './component/register/register';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
