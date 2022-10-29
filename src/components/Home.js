import React, { useEffect, useState } from "react";

const Home = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [errMsg, setErrMsg] = useState({
    username: "",
    room: "",
  });

  const validation = async () => {
    let isPassed = true;
    setErrMsg({
      username: "",
      room: "",
    });
    if (!username) {
      setErrMsg((prev) => ({ ...prev, username: "Please provide a username" }));
      isPassed = false;
    }
    if (!room) {
      setErrMsg((prev) => ({ ...prev, room: "Please select a room" }));
      isPassed = false;
    }
    return isPassed;
  };
  const handleSubmit = async () => {
    if (await validation()) {
      console.log(username, room);
    }
  };
  useEffect(() => {
    console.log("🚀 ~ file: Home.js ~ line 43 ~ Home ~ errMsg", errMsg);
  }, [errMsg]);

  return (
    <div className="h-screen w-full flex text-white justify-center bg-gray-700 md:chatcolor">
      <div className="lg:w-7/12 w-full h-fit m-4 rounded-lg bg-gray-800 md:bg-chatbox">
        <div className="h-14 bg-gray-700 border-gray-800 border-2 md:border-0 md:bg-red-300 grid place-content-center rounded-tl-lg rounded-tr-lg">
          ChatCord
        </div>
        <div className="flex justify-center flex-col space-y-1 md:px-32 md:py-20 py-4 px-4 w-full">
          <div className="pb-5 w-full">
            <h1 className="block mb-2 text-sm font-medium md:text-label">
              Username
            </h1>
            <input
              id="username"
              className="w-full focus:outline-none inputborder rounded-xl py-2 px-3 placeholder:text-gray-500 placeholder:text-sm text-gray-500 text-sm"
              placeholder="John Doe"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <p className="text-red-300 md:text-red-500 text-sm">
              {errMsg?.username}
            </p>
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium md:text-label">
              Room
            </label>
            <select
              id="room"
              name="room"
              className="w-full px-3 py-2 rounded-xl border text-gray-500 text-sm focus:outline-none block inputborder"
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            >
              <option value="">select your room</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="Ruby">Ruby</option>
              <option value="Java">Java</option>
            </select>
            <p className="text-red-300 md:text-red-500 text-sm">
              {errMsg?.room}
            </p>
          </div>

          <div className="w-full text-center py-6">
            <button
              id="formbutton"
              type="submit"
              className="bg-gray-700 md:button p-2 px-6 rounded-xl whitespace-nowrap drop-shadow-sm"
              onClick={handleSubmit}
            >
              Join Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
