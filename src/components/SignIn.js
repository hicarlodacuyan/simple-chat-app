import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function SignIn({ auth }) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return <button className="p-4 bg-blue-500 font-bold text-white" onClick={signInWithGoogle}>Sign in with Google</button>
}

export default SignIn;