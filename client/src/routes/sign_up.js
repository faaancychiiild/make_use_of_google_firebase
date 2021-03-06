import '../index.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { useHistory } from "react-router-dom";
import { FormControl, Button, InputLabel, Input } from "@material-ui/core";

const SignUp = () => {
    let history = useHistory();
    const handleSubmit = async (e) =>  {
        e.preventDefault();
        const { email, password, name, surname } = e.target.elements;
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email.value, password.value)
          .then(() => {
            updateProfile(auth.currentUser, {displayName: `${name.value} ${surname.value}`})
            history.push('/');
          })
          .catch((err) => {
            console.log(err.code, err.message);
          });
    }

    return (
        <form onSubmit={handleSubmit} className='form-control'>
            <h4>Qseli</h4>
            <FormControl required className='form-elements' margin="dense">
                <InputLabel htmlFor='name'>Name</InputLabel>
                <Input name="name" type="text" placeholder="Name" id='name' className='input-element'/>
            </FormControl>
            <FormControl required className='form-elements' margin="dense">
                <InputLabel htmlFor='surname'>Surname</InputLabel>
                <Input name="surname" type="text" placeholder="Surname" id='surname' className='input-element' />
            </FormControl>
            <FormControl required className='form-elements' margin="dense">
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input name="email" type="email" placeholder="Email" id="email" className='input-element'/>
            </FormControl>
            <FormControl required className='form-elements' margin="dense">
                <InputLabel htmlFor='password'>New Password</InputLabel>
                <Input name="password" type="password" placeholder="Password" id='password' className='input-element'/>
            </FormControl>
            <div>
                <Button margin="normal" variant='contained' type="submit" className=' btn'>Sign Up</Button>
                <Button onClick={() => history.push('/')} margin="dense" variant='outlined' className=' btn-1'>Log in</Button>
            </div>
        </form>
    )
}
export default SignUp;
