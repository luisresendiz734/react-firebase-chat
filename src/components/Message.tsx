import { FunctionComponent } from "react";

const Message: FunctionComponent<{ message: any; uid: string | undefined }> = ({
  message,
  uid,
}) => {
  return (
    <article>
      <section
        className={`flex ${
          uid === message.uid ? "flex-row-reverse" : "flex-row"
        }  items-center`}
      >
        <img
          className={`w-6 h-6 rounded-full ${
            uid === message.uid ? "ml-2" : "mr-2"
          } bg-white`}
          src={message.photoURL}
          alt={message.displayName}
        />
        <h3 className="font-bold text-sm text-white">{message.displayName}</h3>
      </section>
      <p
        className={`${
          uid === message.uid ? "text-right" : "text-left"
        } text-white`}
      >
        {message.text}
      </p>
    </article>
  );
};

export default Message;
