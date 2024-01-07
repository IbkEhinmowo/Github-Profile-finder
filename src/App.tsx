import "./App.css";
import Image from "./Image";
import Profile from "./User";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  function handleusername(event) {
    setUser(event.target.value);
  }

  return (
    <div>
      <Image onUsernameSubmit={handleusername} />
      <Profile searchedName={user} />
    </div>
  );
}

export default App;
