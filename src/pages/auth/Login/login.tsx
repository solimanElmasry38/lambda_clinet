// import { useState, useEffect } from "react";
import { GlassOverLay } from "../../../components/GlassOverLay/overLay";
import "../auth.scss";
import { LazyBackground } from "../../../components/lazy";

export const Login = () => {





 
  return (
    <>
      <LazyBackground
        src={
          "https://res.cloudinary.com/ddrulpeh5/image/upload/v1702826804/yv11nhvro6ia0yxrinwc.jpg"
        }
        children={
         
            <GlassOverLay
              children={
                <div className="formContainer">
                  <form action="" method="POST" className="authForm">
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="user email"
                    />
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                    />

                    <input type="submit" value="login" />
                  </form>
                  
                </div>
              }
            />
        }
      />
    </>
  );
};
