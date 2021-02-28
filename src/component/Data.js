import React, {Component,useEffect, useState} from 'react'
import axios from "axios";
const Users = () => {
     const [data, setData] = useState([]);// where to store the returned data
     const [error, setError] = useState(null);

  // the function to fetch data from the api
     const res=axios.get("https://jsonplaceholder.typicode.com/users")
     useEffect(() => {
          res.then(res => setData(res.data))
          res.catch(err => setError(err));
     }, []);
     console.log(data);
     return  (
          <h2>userrs list</h2>
     );
};


export default Users
