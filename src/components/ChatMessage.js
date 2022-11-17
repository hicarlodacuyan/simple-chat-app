function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === props.auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div
        className={
          messageClass === "sent"
            ? "flex flex-col self-end"
            : "flex flex-col self-start"
        }
      >
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
          className={messageClass === "sent" ? "self-end" : "self-start"}
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default ChatMessage;
