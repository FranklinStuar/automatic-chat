import React from 'react'

const ChatContext = React.createContext()

const ChatProvider = (props) => {
  const defaultMessages = [
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum dolorem mollitia vero, ut dolores.",
      author: "chat",
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum dolorem mollitia vero, ut dolores.",
      author: "user",
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum dolorem mollitia vero, ut dolores.",
      author: "chat",
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum dolorem mollitia vero, ut dolores.",
      author: "user",
    },
  ]
  const authors = [
    {
      type:"chat",
      name:"Automatic Chat",
      avatar:"./img/logo.webp",
    },
    {
      type:"user",
      name:"User",
      avatar:"./img/logo.webp",
    }
  ]
  const [listMessages, setListMessages] = React.useState(defaultMessages)
  const [newMessage, setNewMessage] = React.useState("")
  const [chatStatus, setChatStatus] = React.useState(false)

  const openChat = () =>{
    setChatStatus(true)
  }
  const closeChat = () =>{
    setChatStatus(false)
  }

  const writeMessage = (text) =>{
    setNewMessage(text)
  }
  const sendMessage = (e) =>{
    e.preventDefault();
    let text = e.target.value
    const message = {
      content: text,
      author: "user",
    }
    const tempListMessages = [...listMessages, message]
    setListMessages(tempListMessages)
    setNewMessage("")
  }


  return (
    <ChatContext.Provider
      value={{
        authors,
        listMessages, setListMessages,
        newMessage, setNewMessage, writeMessage, sendMessage,
        chatStatus, setChatStatus, openChat, closeChat
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
}


export {ChatContext, ChatProvider}
