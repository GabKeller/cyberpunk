import { useState } from "react";
import { login, logout } from "./store";
import { useDispatch ,useSelector } from "react-redux";//useDispatch for modifing states and useSelecter is for getting states 

import React from "react";

const Login = () => {
  const [newUsername, setNewUsername] = useState("");
  const username = useSelector((state)=> state.user.value.username)

  const dispatch = useDispatch();
  return (
    <div>
      <h1>{username}</h1>
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Login
      </button>
      <button onClick={dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Login;
