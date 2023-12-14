import Logo from "../../assets/logo.png";
import "./header.scss";
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
          <li>
            <a href="">Cotact us</a>
          </li>
          <li>
            <a href="">Signup</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
