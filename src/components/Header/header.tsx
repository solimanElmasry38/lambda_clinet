import Logo from "../../assets/logo.png";
import "./header.scss";
import Cookies from "js-cookie";

export const Header = () => {
  return (
    <header>
      <nav>
        <a href="" className="logo">
          <img src={Logo} alt="" />
          <h2>lambda</h2>
        </a>
        <form action="" className="search" method="GET">
          <input type="text" name="" id="search" />
          <button className="submit"></button>
        </form>
        <ul>
          <li>
            <a href="">Home</a>
          </li>

          {Cookies.get("lambda_usr_token") ? (
        
            <>
              <li>
                <a href="">logout</a>
              </li>
              <span className="profile">span</span>
            </>
          ) : (
            <>
              <li>
                <a href="">login</a>
              </li>
              <li>
                <a href="">Signup</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
