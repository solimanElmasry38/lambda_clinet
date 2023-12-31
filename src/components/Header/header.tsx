import { useQuery } from "@apollo/client";
import Logo from "../../assets/logo.png";
import "./header.scss";
import Cookies from "js-cookie";
import { _GetUser } from "../../gql/query/getUser.gql";


const logout = () => {
  Cookies.remove("lambda_usr_token");
  location.reload();
};
export const Header = () => {
  const { data, loading } = useQuery(_GetUser, {
    variables: {
      input: {
        id: Cookies.get("lambda_usr_id"),
        token: Cookies.get("lambda_usr_token"),
      },
    },
  });
  if (loading) {
    return "loading"
  }

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
            <a className="nav_btn" href="">
              Home
            </a>
          </li>

          {Cookies.get("lambda_usr_token") ? (
            <>
              <li>
                <span className="nav_btn" onClick={logout}>
                  logout
                </span>
              </li>

              {data ? (
                <img
                  src={data.USER_GET.img}
                  alt=""
                  loading="lazy"
                  className="profile"
                />
              ) : (
                <span></span>
              )}
            </>
          ) : (
            <>
              <li>
                <a className="nav_btn" href="">
                  login
                </a>
              </li>
              <li>
                <a className="nav_btn" href="">
                  Signup
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
