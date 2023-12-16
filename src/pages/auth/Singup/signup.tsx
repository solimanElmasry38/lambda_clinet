import { GlassOverLay } from "../../../components/GlassOverLay/overLay";
import "./signup.scss";
import "../auth.scss";
import { useState } from "react";
import { CREATE_USER_M } from '../../../gql/mutation/createUser';
import { useMutation } from "@apollo/client";
export const Signup = () => {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const [USER_CREATE, { error}] = useMutation(CREATE_USER_M);
  return (
    <>
       <div className="authContainer">
        <GlassOverLay />
        <div className="formContainer">
          <form action="" method="POST" className="authForm">
            {error && 
              <p style={{fontSize:"14px"}}>
             {error.message} 
            </p>
            }
            <label htmlFor="user_name">user name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="user_name"
              onChange={(e) => setusername(e.target.value)}
            />
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="user email"
              onChange={(e) => setemail(e.target.value)}

            />
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={(e) => setpass(e.target.value)}

            />        
          </form>
          <button  onClick={async () => {

    await USER_CREATE({
  variables: {

    user_name: username,
    img:"solyimag",
    email: email,
    password: pass,
  },
}).then((res)=>{console.log(res.data.USER_CREATE)})



}} >sign</button>
          <p className="or">or</p>
          <div className="social">logi</div>
        </div>
      </div>
    </>
  );
};
