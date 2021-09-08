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
        .then(() => {
          history.push('/home');
        })
        .catch((err) => {
          console.log(err.code, err.message);
        });
    }
    return (
        <div>
        <form onSubmit={handleSubmit} className='form-control'>
          <h4>Log in to kakao talks</h4>
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
            <Button onClick={() => history.push('/sign_up')} margin="dense" variant='contained' className='btn'>Sign up</Button>
          </div>
        </form>
      </div>
    )
}
export default LogIn;