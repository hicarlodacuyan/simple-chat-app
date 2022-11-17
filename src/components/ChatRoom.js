import { useState, useRef } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

import ChatMessage from "./ChatMessage";

function ChatRoom({ auth, firestore }) {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (formValue === "") return;

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-200">
      <main className="flex-1 flex flex-col">
        {messages &&
          messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} auth={auth} />
          ))}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage} className="flex-2 flex outline outline-1">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1"
        />
        <button type="submit" onClick={sendMessage} className="bg-blue-300 p-4">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatRoom;
