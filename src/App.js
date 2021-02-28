//importing react , useState and useEffect
import React, { useState, useEffect } from "react";
//importing axios
import axios from "axios";
//importing listCard component
import ListCard from "./component/ListCard/ListCard";
//importing the css
import './App.css'

function App () {
    // creating the state where to store the data
    const [users, setUsers] = useState([]);
    // fetching the data from the api with axios
    const req = axios.get("https://jsonplaceholder.typicode.com/users");
    // using the use effect to get the data
    useEffect(() => {
      req.then(response => setUsers(response.data));
    }, []);
    return (
      <div className="App" >
        {/*calling the list card component*/}
        <ListCard users={users} />
      </div>
  );
}

export default App;
