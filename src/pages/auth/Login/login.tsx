import { GlassOverLay } from "../../../components/GlassOverLay/overLay";
import "../auth.scss";
export const Login = () => {
  return (
    <>
      <div className="authContainer">
        <GlassOverLay />
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
      </div>
    </>
  );
};
