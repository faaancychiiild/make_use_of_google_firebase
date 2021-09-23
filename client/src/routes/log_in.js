import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom';
import { FormControl, Button, InputLabel, Input } from "@material-ui/core";

const LogIn = () => {
    let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        let auth = getAuth();
        await signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          console.log(userCredential.user);
        })
        .catch((err) => {
          console.log(err.code, err.message);
        });
    }
    return (
        <div>
        <form onSubmit={handleSubmit} className='form-control'>
          <img alt='kakao' src='https://us.123rf.com/450wm/fokaspokas/fokaspokas1808/fokaspokas180801987/111837694-message-cloud-icon-orange-neon-style-on-black-background-light-icon.jpg?ver=6' className='kakao-icon'></img>
          <h4>Welcome to Qseli</h4>
          <FormControl required className='form-elements' margin="dense">
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input className='input-element' name="email" type="email" placeholder="Email" id='email'/>
          </FormControl>
          <FormControl required className='form-elements' margin="dense">
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input className='input-element' name="password" type="password" placeholder="Password" id='password'/>
          </FormControl>
          <div>
            <Button type="submit" margin="dense" variant='contained' className='btn'>Log in</Button>
            <Button onClick={() => history.push('/sign_up')} margin="dense" variant='outlined' className='btn-1'>Sign up</Button>
          </div>
        </form>
      </div>
    )
}
export default LogIn;
