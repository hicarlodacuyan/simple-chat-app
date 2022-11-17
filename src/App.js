import "./App.css";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBzQnmi6q_cg--rj0Q7Pl4vr69EKDYvSl8",
  authDomain: "chat-app-e2e80.firebaseapp.com",
  projectId: "chat-app-e2e80",
  storageBucket: "chat-app-e2e80.appspot.com",
  messagingSenderId: "781259287353",
  appId: "1:781259287353:web:3a812be50a3b7e0abd96e8",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="flex flex-col max-w-2xl mx-auto h-screen">
      <header className="flex justify-end">
        <SignOut auth={auth} />
      </header>

      <section className="flex-1 flex justify-center items-center">
        {user ? (
          <ChatRoom auth={auth} firestore={firestore} />
        ) : (
          <SignIn auth={auth} />
        )}
      </section>
    </div>
  );
}

export default App;
