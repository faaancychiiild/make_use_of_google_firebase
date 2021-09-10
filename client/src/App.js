import { Auth } from './context';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './routes/sign_up';
import LogIn from './routes/log_in';
import app from './firebase';
function App() {
   return (
    <div className="App">
      <Auth>
        <img alt='kakao' src='https://img.flaticon.com/icons/png/512/2111/2111466.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF' className='kakao-icon'></img>
        <BrowserRouter>
          <Route exact path='/sign_up' component={SignUp}></Route>
          <Route exact path='/' component={LogIn}></Route>
        </BrowserRouter>
      </Auth>
    </div>
  );
}

export default App;
