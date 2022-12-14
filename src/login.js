import { Button } from 'react-bootstrap'
import React from 'react'
// import { useNavigate } from "react-router-dom";
// import head from "./head";
function Login() {
  // const [use_email,setEmail]=useState("");
  //  const [use_pwd,setPassword]=useState("");
  //const navigate = useNavigate();
  // useEffect(() =>u
  // {
  //     if(localStorage.getItem('user-info'))
  //     {
  //             history.push("\dashboard");
  //     }
  // },[])
  function login() {
    // console.warn(use_email,use_pwd);
    // let item = {use_email,use_pwd};
    // let result=await fetch("http://localhost:8000/api/login",{
    //     method:"post",
    //     body:JSON.stringify({use_email,use_pwd}),
    //     headers:{
    //         "Content-Type":"application/json",
    //         //"Accept":"application/json"
    //     },

    // });
    // result = await result.json();
    // console.warn(result);
    //localStorage.setItem(JSON.stringify(result))
    //navigate('/dashboard');
    window.location.href = 'Navbar'
  }
  return (
    <div>
      <h1>Login page</h1>
      <br />
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="Enter Driver ID"
          className="form-control"
        ></input>
        <br />
        <input
          type="password"
          placeholder="Enter PIN"
          className="form-control"
        ></input>
        <br />
        <Button className="btn btn-primary" onClick={login}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
