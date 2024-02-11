import { GlassOverLay } from "../../../components/GlassOverLay/overLay";
import Cookies from "js-cookie";
import "./signup.scss";
import "../auth.scss";
import { _CreateUser } from "../../../gql/mutation/createUser.gql";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import post from "axios";
import { LazyBackground } from "../../../components/lazy";

import { useState } from "react";
import { Randshapes } from "../../../components/Randshapes/rand_shapes";

const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [USER_CREATE, { error }] = useMutation(_CreateUser);

  const handelSubmit = async () => {
    try {
      await USER_CREATE({
        variables: {
          input: {
            user_name: username,
            img: "solyimag",
            email: email,
            password: pass,
          },
        },
      }).then((res) => {
        Cookies.set("lambda_usr_id", res.data.USER_CREATE.id);
      });
      location.replace("/verify");
    } catch (err) {
      throw err;
    }
  };

  const h = async () => {
    await post("http://127.0.0.1:8888/auth/github/callback")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <LazyBackground
      src={
        "https://res.cloudinary.com/ddrulpeh5/image/upload/v1702826804/yv11nhvro6ia0yxrinwc.jpg"
      }
    >
      <Randshapes />
      <GlassOverLay>
        <div className="formContainer">
          <form action="" method="POST" className="authForm">
            {error && <p className="err">* {error.message}</p>}
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
          <button onClick={() => handelSubmit()}>sign up</button>
          <p className="or">or</p>
          <div className="social">
            <Link
              to={"http://localhost:8888/auth/github"}
              className="fa-brands fa-github gitIcon"
              onClick={() => h()}
            ></Link>

            <Link
              to={"http://localhost:8888/auth/github"}
              className="fa-brands fa-google googleIcon"
            ></Link>

            <Link
              to={"http://localhost:8888/auth/github"}
              className="fa-brands fa-facebook faceIcon"
            ></Link>
          </div>
        </div>
      </GlassOverLay>
    </LazyBackground>
  );
};
export default Signup;
