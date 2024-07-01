import React from "react";
import profile from "../../assets/images/profile.png";
import profile2 from "../../assets/images/profile2.png";
import profile3 from "../../assets/images/profile3.png";
import profile4 from "../../assets/images/profile4.png";
import { HorizontalDots } from "../SVG-Icons";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white h-[68px]">
      <div className="flex items-center">
        <img
          src={profile}
          alt="avatar"
          className="w-6 h-6 rounded-full border-white"
        />
        <img
          src={profile2}
          alt="avatar"
          className="w-6 h-6 rounded-full border-white"
        />
        <img
          src={profile3}
          alt="avatar"
          className="w-6 h-6 rounded-full border-white"
        />
        <img
          src={profile4}
          alt="avatar"
          className="w-6 h-6 rounded-full border-white"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-lg">Team Unicorns</h1>
        <p className="text-sm text-gray-500">last seen 45 minutes ago</p>
      </div>
      <button className="text-gray-500">
        <HorizontalDots />
      </button>
    </div>
  );
};

export default Header;
