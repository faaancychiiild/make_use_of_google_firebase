import { Auth } from './context';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './routes/sign_up';
import LogIn from './routes/log_in';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

function App() {
   return (
    <div className="App">
      <Auth>
        <div className='kakao-icon'><LocalCafeIcon/></div>
        <BrowserRouter>
          <Route exact path='/sign_up' component={SignUp}></Route>
          <Route exact path='/' component={LogIn}></Route>
        </BrowserRouter>
      </Auth>
    </div>
  );
}

export default App;
