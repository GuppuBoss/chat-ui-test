import React from "react";
import { MessageBubbleProps } from "../../types/general";

const MessageBubble: React.FC<MessageBubbleProps> = ({
  sender,
  department,
  message,
  time,
  isSender,
}) => {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs py-2 px-4 ${
          isSender ? "bg-blue-500 text-white" : "bg-gray-200"
        } rounded-lg`}
      >
        <div className="flex items-center">
        {!isSender && <div className="font-bold text-start">{sender}</div>}
        <p className="text-xs text-gray-500 ml-4">{department}</p>
        </div>
        <p className="text-sm">{message}</p>
        <div className={`text-xs  ${isSender ? 'text-white' : 'text-gray-500'} text-right mt-2`}>{time}</div>
      </div>
    </div>
  );
};

export default MessageBubble;
