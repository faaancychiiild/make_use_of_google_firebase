import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom';
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
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    )
}
export default LogIn;