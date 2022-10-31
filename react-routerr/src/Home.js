import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    const gotoabout = () =>{
    navigate("About");
    }
  return (
    <div>
        <h1>Home</h1>
       <Link to={"Profile"}>Go to Profile</Link><br/>
       <button onClick={() =>gotoabout()}>Go to About</button>
        </div>
  )
}

export default Home