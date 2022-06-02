import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";
import { firebase, firestore } from "../utils/firebase";
import { useUser } from "../context/UserContext";

interface IMessages {
  id: string;
  text: string;
  uid: string;
  photoURL: string;
  displayName: string;
  createdAt: firebase.firestore.Timestamp;
}

const messagesRef = firestore.collection("messages");
const messagesQuery = messagesRef.orderBy("createdAt").limit(100);

const Channel = () => {
  const [text, setText] = useState("");
  const [messages] = useCollectionData<IMessages>(messagesQuery, {
    idField: "id",
  });
  const dummy = useRef<HTMLDivElement>(null);
  const { user } = useUser();

  useEffect(() => {
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (event: SyntheticEvent) => {
    event.preventDefault();
    if (user) {
      const { uid, displayName, photoURL } = user;
      messagesRef.add({
        text,
        uid,
        displayName,
        photoURL,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setText("");
  };

  return (
    <section className="h-full flex flex-col justify-between">
      <section className="mx-auto w-11/12 flex-1 mt-4 overflow-y-scroll">
        {messages &&
          messages.map((message) => (
            <Message key={message.id} uid={user?.uid} message={message} />
          ))}
        <div ref={dummy}></div>
      </section>
      <form className="mx-auto w-11/12 flex my-2" onSubmit={sendMessage}>
        <input
          className="px-2 py-1 rounded text-white flex-1 bg-gray-700"
          type="text"
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-gray-200 px-2 rounded py-1 ml-1">Enviar</button>
      </form>
    </section>
  );
};

export default Channel;
