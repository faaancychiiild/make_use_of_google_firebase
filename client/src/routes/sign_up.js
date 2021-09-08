import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useHistory } from "react-router";

const SignUp = () => {
    let history = useHistory();
    const handleSubmit = async (e) =>  {
        e.preventDefault();
        const { email, password, Username } = e.target.elements;
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            const user = userCredential.user;
            user.displayName = Username.value;
            console.log(user.displayName + "created");
            history.push('/home');
          })
          .catch((err) => {
            console.log(err.code, err.message);
          });
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Username
                    <input name="Username" type="text" placeholder="Username" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </React.Fragment>
    )
}
export default SignUp;