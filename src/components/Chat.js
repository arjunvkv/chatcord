import React, { useState } from "react";
import { IoLogoSnapchat } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { MdOutlineSendToMobile } from "react-icons/md";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
const rooms = ["javascript", "react", "sass", "node", "django", "python"];
const users = ["steeven", "arjun", "deepak", "vyshak", "vinayak", "julian"];

const Chat = () => {
  const [showRoom, setShowRoom] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [messages, setMessages] = useState([
    { message: "hai you have been disQualified", time: "1:5pm", name: "arjun" },
    // { message: "hai you have been disQualified", time: "1:5pm", name: "jojo" },
    // { message: "hai you have been disQualified", time: "1:5pm", name: "do" },
    // { message: "hai you have been disQualified", time: "1:5pm", name: "not" },
    // { message: "hai you have been disQualified", time: "1:5pm", name: "try" },
    // { message: "hai you have been disQualified", time: "1:5pm", name: "this" },
    // { message: "hai you have been disQualified", time: "1:5pm", name: "at" },
    // { message: "hai you have been disQualified", time: "1:5pm", name: "home" },
    // {
    //   message: "hai you have been disQualified",
    //   time: "1:5pm",
    //   name: "adventures",
    // },
    // {
    //   message: "hai you have been disQualified",
    //   time: "1:5pm",
    //   name: "bizare",
    // },
    // {
    //   message: "hai you have been disQualified",
    //   time: "1:5pm",
    //   name: "chrison",
    // },
    // {
    //   message: "hai you have been disQualified",
    //   time: "1:5pm",
    //   name: "steeven",
    // },
  ]);

  const sendMsg = () => {
    setMessages((prev) => [
      ...prev,
      {
        message: "hai you have been disQualified",
        time: "1:5pm",
        name: "jojo",
      },
    ]);
  };

  const leaveRoom = () => {
    localStorage.clear();
    console.log("left");
    window.location.href = "/";
  };
  return (
    <div className="p-o flex h-screen w-full flex-col items-center bg-gray-700 capitalize text-white md:p-10 lg:p-20 2xl:text-xl">
      <div className="container flex h-screen w-full flex-col overflow-hidden border-2 border-gray-800 md:h-auto md:rounded-lg">
        <div className="nav flex h-20 w-full items-center justify-between bg-gray-700 px-3 md:bg-gray-800">
          <div className="flex items-center justify-center space-x-2">
            <i className="fa-solid fa-message"></i>
            <IoLogoSnapchat size="2em" />
            <h1 className="">chatcord</h1>
          </div>
          <button
            className="button bg-gray-800 md:bg-gray-700"
            onClick={leaveRoom}
          >
            Leave Room
          </button>
        </div>
        <div className="midbar flex h-full w-full overflow-hidden rounded-lg md:h-80 xl:h-[60vh]">
          <div
            className={`leftsidebar fixed h-full w-4/12 rounded-tr-md bg-gray-700 md:relative  md:block md:animate-none md:rounded-lg md:bg-auto ${
              showRoom ? "block animate-showrooms" : "hidden animate-hiderooms"
            }`}
          >
            <div className="roomContainer pt-5">
              <h1 className="flex items-center justify-center space-x-4 whitespace-pre bg-gray-800 p-2">
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
          <div className="msgSection no-scrollbar h-full  w-full overflow-scroll overscroll-none  bg-gray-800 text-white  md:h-auto md:rounded-lg">
            <div className="space-y-5 p-5 pb-36 text-left md:pb-5">
              {messages.map((message) => {
                return (
                  <div
                    className="message space-y-2 rounded-md bg-gray-700 p-2 text-xs text-gray-300 shadow-2xl md:shadow-md"
                    key={message.name}
                  >
                    <div className="flex w-full items-center justify-between space-x-1">
                      <p className="mr-1 text-sm text-white xl:text-xl 2xl:text-xl">
                        {message.name}
                      </p>
                      <h1 className="rounded-sm bg-gray-800 p-1 text-xs text-white xl:text-sm 2xl:text-lg">
                        Today at {message.time}
                      </h1>
                    </div>
                    <p className="xl:text-base 2xl:text-lg">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aperiam, totam consequuntur delectus tempora molestias
                      pariatur vel rem in ipsam libero.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`rightsidebar fixed right-0 h-full w-4/12 rounded-tl-md bg-gray-700 md:relative md:block md:animate-none md:rounded-lg md:bg-auto ${
              showUsers ? "block animate-showusers" : "hidden animate-hideusers"
            }`}
          >
            <div className="userContainer pt-5">
              <h1 className="flex items-center justify-center space-x-2 whitespace-pre bg-gray-800  p-2 text-center">
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
        <div className="fixed bottom-0 w-full md:relative">
          <div className="flex h-12 w-full items-center justify-between bg-gray-700 p-2 px-5 md:hidden">
            <div
              className="roomicon rounded-full bg-gray-800 p-3"
              onClick={() => {
                setShowRoom(!showRoom);
              }}
            >
              <MdOutlineRoomPreferences />
            </div>
            <div
              className="usersicon rounded-full bg-gray-800 p-3"
              onClick={() => {
                setShowUsers(!showUsers);
              }}
            >
              <FaUsersCog />
            </div>
          </div>
          <div className="footer nav flex h-16 items-center  justify-between bg-gray-700 px-3 md:relative md:h-20 md:bg-gray-800 ">
            <input
              type="text"
              className="w-full rounded-md py-2 px-2 text-black outline-none"
              placeholder="Enter Message"
            />
            <button
              className="button flex items-center justify-center space-x-1 bg-gray-800 md:bg-gray-700"
              onClick={sendMsg}
            >
              <p>Send</p>
              <p>
                <MdOutlineSendToMobile />
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
