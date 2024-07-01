import React from 'react';
import Header from '../header';
import MessageBubble from '../MessageBubble';
import Footer from '../Footer';
import ChatHeader from '../ChatHeader/ChatHeader';
import { messages } from '../../constants/common';

const Chat: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            department={msg.department}
            message={msg.message}
            time={msg.time}
            isSender={msg.isSender}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Chat;
