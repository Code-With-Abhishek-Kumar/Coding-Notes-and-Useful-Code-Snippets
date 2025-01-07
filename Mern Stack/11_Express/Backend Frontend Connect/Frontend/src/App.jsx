import { useCallback, useState } from "react";
import './App.css'
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("/api/userData")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <>
    <main className="">

    <h1>Code With Abhishek</h1>
      <p>users: {users.length}</p>

      {users.map(function (user, index) {
        <div>
          <h2> {user.name} </h2>
          <p> {user.age} </p>
          <p> {user.email} </p>
        </div>;
      })}
    </main>


     
    </>



  );
}




export default App;
