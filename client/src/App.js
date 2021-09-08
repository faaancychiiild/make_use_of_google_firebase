import { Auth } from './context';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/home';
import SignUp from './routes/sign_up';
import LogIn from './routes/log_in';
function App() {
  
  return (
    <div className="App">
      <Auth>
        <BrowserRouter>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/sign_up' component={SignUp}></Route>
          <Route exact path='/' component={LogIn}></Route>
        </BrowserRouter>
      </Auth>
    </div>
  );
}

export default App;
