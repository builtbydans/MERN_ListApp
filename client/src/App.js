import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {

  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers")
    .then((response) => {
      console.log(response)
      setListOfUsers(response.data)
    })
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: name,
      age: age,
      username: username
    }).then((response) => {
      setListOfUsers([...listOfUsers, {name, age, username}])
    })
  }

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          console.log(user);
          return (
            <div className="userCard">
              <div className="container">
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Username: {user.username}</p>
              </div>
            </div>
          )}
        )}
      </div>

      <div className="formInput">
        <p>Add User to Database</p>
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Age' onChange={(e) => setAge(e.target.value)}/>
        <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
