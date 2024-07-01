import React, { useState } from "react";
import {
  ActiveSendIcon,
  DisableSendIcon,
  EmailIcon,
  EmojiIcon,
} from "../SVG-Icons";

const Footer: React.FC = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex items-center p-4 border-t border-gray-200 h-12 mb-5">
      <button className="p-2 text-gray-500">
        <EmojiIcon />
      </button>
      <input
        type="text"
        className="flex-1 mx-2 p-2 border-none outline-none"
        placeholder="Start typing..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="p-2 text-gray-500 mr-2">
        <EmailIcon />
      </button>
      <button disabled={!message}>
        {message ? <ActiveSendIcon /> : <DisableSendIcon />}
      </button>
    </div>
  );
};

export default Footer;
