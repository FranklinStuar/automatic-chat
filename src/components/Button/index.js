import React from 'react'

const Button = ({activeChat}) => {
  return (
    <div className='button-chat' onClick={activeChat}>
      <img width={64} height={64} src="./img/logo.webp" alt="Automatic Chat - Logo" />
    </div>
  );
}

export {Button};