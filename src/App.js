import React from 'react';
import {Button} from "./components/Button"
import {Container} from "./components/Container"

function App() {
  const [chatStatus, setChatStatus] = React.useState(false)
  const activeChat = () =>{
    console.log("active chat")
    setChatStatus(!chatStatus)
  }
  return (
    <div>
      <Container
        chatStatus={chatStatus}
      />
      <Button
        chatStatus={chatStatus}
        activeChat={activeChat}
      />
    </div>
  );
}

export default App;
