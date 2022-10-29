import React from "react";
import { IoLogoSnapchat } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdOutlineMeetingRoom } from "react-icons/md";
const rooms = ["javascript", "react", "sass", "node", "django", "python"];
const users = ["steeven", "arjun", "deepak", "vyshak", "vinayak", "julian"];

const Chat = () => {
  return (
    <div className="p-o h-screen w-full bg-gray-700 capitalize text-white md:p-10 lg:p-20">
      <div className="container flex h-screen w-full flex-col border-2 border-gray-800 md:h-auto md:rounded-lg">
        <div className="nav flex h-20 w-full items-center justify-between bg-gray-800 px-3">
          <div className="flex items-center justify-center space-x-2">
            <i class="fa-solid fa-message"></i>
            <IoLogoSnapchat size="2em" />
            <h1 className="">chatcord</h1>
          </div>
          <button className="button bg-gray-700">Leave Room</button>
        </div>
        <div className="midbar flex h-full w-full rounded-lg md:h-80 xl:h-96 ">
          <div className="leftsidebar hidden w-4/12 rounded-lg md:block">
            <div className="roomContainer p-5">
              <h1 className="flex items-center justify-center space-x-4 rounded-md bg-gray-800 p-1">
                <span className="mr-1">
                  <MdOutlineMeetingRoom size="1.2em" />
                </span>
                room -- 5
              </h1>
              <div className="rooms space-y-3 py-3 text-center">
                {rooms.map((room, index) => {
                  return (
                    <div className="room" key={index}>
                      <p>{room}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="msgSection no-scrollbar h-full w-full overflow-scroll  overscroll-none rounded-lg bg-white p-5 text-black text-gray-600 md:h-auto">
            <p>something</p>
          </div>
          <div className="rightsidebar hidden w-4/12 rounded-lg md:block">
            <div className="userContainer p-5">
              <h1 className="flex items-center justify-center space-x-2 rounded-md bg-gray-800 p-1  text-center">
                <FaUsers size="1.2em" />
                <span></span> users -- 5
              </h1>
              <div className="users space-y-3 py-3 text-center">
                {users.map((user, index) => {
                  return (
                    <div className="users" key={index}>
                      <p>{user}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="footer nav flex h-20 w-full items-center justify-between bg-gray-800 px-3 ">
          <input
            type="text"
            className="w-full rounded-md py-2 px-2 text-black outline-none"
            placeholder="Enter Message"
          />
          <button className="button bg-gray-700">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
