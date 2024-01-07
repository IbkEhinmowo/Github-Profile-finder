import "./App.css";
import Image from "./Image";
import Profile from "./User";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  function handleusername(username) {
    console.log(username); // Fix typo here

    setUser(username);
  }

  return (
    <div>
      <Image onUsernameSubmit={handleusername} />
      <Profile searchedName={user} />
    </div>
  );
}

export default App;
