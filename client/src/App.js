import { Context, Auth } from './context';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/home';
import SignUp from './routes/sign_up';
import LogIn from './routes/log_in';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import { useContext, useEffect } from 'react';

function App() {
  let currentUser = useContext(Context);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser])
  return (
    <div className="App">
      <Auth>
        <div className='kakao-icon'><LocalCafeIcon/></div>
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
