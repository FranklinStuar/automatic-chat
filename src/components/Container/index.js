import React from 'react'
import {Header} from './../Header'
import {Form} from './../Form'
import {Conversation} from './../Conversation'

const Container = () => {
  return (
    <div className='container-chat'>
      <Header/>
        <div className="body-chat">
          <Conversation
            avatar="./img/logo.webp"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum dolorem mollitia vero, ut dolores."
            name="Automatic Chat"
          />
          <Conversation
            typeConversation="chat-user" 
            avatar="./img/logo.webp"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum dolorem mollitia vero, ut dolores."
            name="Automatic Chat"
          />
        </div>
        
      <Form/>
    </div>
  );
}

export {Container};