import { GlassOverLay } from "../../../components/GlassOverLay/overLay";
import "./signup.scss";
import "../auth.scss";
export const Signup = () => {
  return (
    <>
      <div className="authContainer">
        <GlassOverLay />
        <div className="formContainer">
          <form action="" method="POST" className="authForm">
            <label htmlFor="user_name">user name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="user_name"
            />
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

            <input type="submit" value="signup" />
          </form>
          <p className="or">or</p>
          <div className="social">logi</div>
        </div>
      </div>
    </>
  );
};
