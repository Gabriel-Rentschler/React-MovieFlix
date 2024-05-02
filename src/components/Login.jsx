import { signInWithPopup } from "firebase/auth";
import { googleProvider, auth } from "../config/keysConfig";

const Login = (props) => {

    async function loginWithGoogle() {
        try {
            await signInWithPopup(auth, googleProvider)
            .then(props.setIsAuth(true));
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="content">
      
          <h1>MovieFlix</h1>
          <button onClick={loginWithGoogle}>Log In With Google</button>
        </div>
    );
}

export default Login