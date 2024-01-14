import "./App.css";
import Image from "./Image";
import Profile from "./User";
import Projects from "./Project";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [userDataFromUserComponent, setUserDataFromUserComponent] =
    useState(null);

  function handleusername(username) {
    console.log(username); // Fix typo here
    setUser(username);
  }
  const handleUserDataUpdate = (userData) => {
    setUserDataFromUserComponent(userData);
  };

  return (
    <div>
      <Image
        onUsernameSubmit={handleusername}
        userData={userDataFromUserComponent}
      />
      <Profile searchedName={user} onUserDataUpdate={handleUserDataUpdate} />
      <Projects userData={userDataFromUserComponent} />
    </div>
  );
}

export default App;
