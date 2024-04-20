import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState<string | null>(null);
  const [sendMessage, setSendMessage] = useState<string | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("Connected");
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      console.log("Recieved message: ", message.data);
      setLatestMessage(message.data);
    };
    return () => {
      socket.close();
    };
  }, []);

  if (!socket) {
    return <>Loading...</>;
  }

  return (
    <>
      <input
        onChange={(e) => {
          setSendMessage(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (sendMessage) {
            socket.send(sendMessage);
          }
        }}
      >
        Send
      </button>
      {latestMessage}
    </>
  );
}

export default App;
