import React from "react";
// import React, { useState, useEffect } from "react";
import "./components/inbox.scss";
import Primary from "./components/sections/primary/Primary";
import Main from "./components/sections/main/Main";
import Secondary from "./components/sections/secondary/Secondary";

function Inbox() {
  //   const [userName, setUserName] = useState("");
  //   const [greeting, setGreeting] = useState("");

  //   useEffect(() => {
  //     // Fetch user's name here
  //     // You can use an API call or retrieve it from the browser's local storage
  //     const fetchUserName = async () => {
  //       try {
  //         const response = await fetch("/api/getUserName");
  //         const data = await response.json();
  //         setUserName(data.name);
  //       } catch (error) {
  //         console.error("Error fetching user name:", error);
  //       }
  //     };

  //     fetchUserName();
  //   }, []);

  //   useEffect(() => {
  //     // Determine the appropriate greeting based on the time of the day
  //     const currentHour = new Date().getHours();
  //     let greetingText = "";

  //     if (currentHour >= 5 && currentHour < 12) {
  //       const morningGreetings = [
  //         "Good morning",
  //         "Rise and shine",
  //         "Wakey-wakey",
  //       ];
  //       greetingText =
  //         morningGreetings[Math.floor(Math.random() * morningGreetings.length)];
  //     } else if (currentHour >= 12 && currentHour < 18) {
  //       const afternoonGreetings = ["Good afternoon", "Hola", "Greetings"];
  //       greetingText =
  //         afternoonGreetings[
  //           Math.floor(Math.random() * afternoonGreetings.length)
  //         ];
  //     } else {
  //       const eveningGreetings = ["Good evening", "Hey there", "Nighty-night"];
  //       greetingText =
  //         eveningGreetings[Math.floor(Math.random() * eveningGreetings.length)];
  //     }

  //     setGreeting(greetingText);
  //   }, []);

  return (
    <div className="inbx-wrpr">
      <div className="scn-wrpr">
        <Primary />
        <Main />
        <Secondary />
      </div>
    </div>
  );
}

export default Inbox;
