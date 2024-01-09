import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";
import { IoIosSend } from "react-icons/io";
function App() {
  const room = 0;
  const [message, setMessage] = useState("");
  const [inbox, setInbox] = useState([]);
  const [socket, setSocket] = useState(undefined);
  // const [count, setCount] = useState(0);

  const sendMessage = () => {
    console.log(message);

    socket.emit("message", message);
  };

  useEffect(() => {
    const socket = io("http://localhost:3003/");

    // socket.on("connect", () => {
    //   console.log("Successfully connected!");
    // });

    socket.on("message", (message) => {
      setInbox([...inbox, message]);
    });

    setSocket(socket);
  }, [inbox]);

  return (
    <>
      <div className="wrapper">
      <div className="chat-box">
        <ul className="messages">

          {inbox &&
            inbox.map((elem, i) => {
              return (<>
                <li className={i % 2 === 0 ? "left-element" : "right-element"} style={{ top: `${i * 40}px` }} key={i}> <div className="foto"></div>{elem} </li>
              </>)


            })}
        </ul>
        <div className="message-box">
          <input onChange={(e) => setMessage(e.target.value)} type="text" />
          <button onClick={sendMessage}><IoIosSend /></button>
        </div>
      </div>
      </div>


    </>
  );
}

export default App;