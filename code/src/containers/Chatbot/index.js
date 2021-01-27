import React from "react";
import socketIOClient from "socket.io-client";


const ENDPOINT = "http://tourism-dev.tetvietaic.com:8002";
function Chatbot() {
  const socket = socketIOClient(ENDPOINT);
  console.log(socket);
  console.log(ENDPOINT);
  socket.on("webhook", data => {
      console.log('hook', data)
  });

  socket.on('auto-reply', data => {
          console.log('reply', data)
  });

  let data = {
    "channel": "api",
    "app_code": "137793bf9473297fb660e3e7adf5af25",
    "sender_id": "sender_id_abc",
    "type": "payload",
    "sender_name": "Sang",
    "message": {
      "content": 'hi',
      "type": "payload"
    },
    "lat":1,
    "lon":1,
    "client_type": "android",
    "danh_xung_bot":"Em",
    "danh_xung_user": "Anh",
    "app_version": '1.2',
  }
  socket.emit('/ws/livechat', JSON.stringify(data));
  console.log('data: ', data);


  return (
    <div className="chat-bot">
      Chatg
    </div>
  );
}

export default Chatbot;
