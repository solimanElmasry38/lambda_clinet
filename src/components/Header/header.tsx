
import Logo from '../../assets/logo.png';
import './header.scss';
import Cookies from 'js-cookie';
import { _GetUser } from '../../gql/query/getUser.gql';


import ProductsCartCount from '../ProductsCartCount/ProductsCartCount';
import { useNavigate } from 'react-router-dom';


const logout = () => {
  Cookies.remove('lambda_usr_token');
  location.reload();
};
export const Header = () => {
const navigate=useNavigate()
  return (
    <header>
      <nav>
        <i  className="logo" onClick={()=>navigate("/")}>
          <img src={Logo} alt="" />
          <h2>lambda</h2>
        </i>

        <ul>
          <li>
            <a className="nav_btn" href="">
              Home
            </a>
          </li>

          {Cookies.get('lambda_usr_token') ? (
            // <>
            <li>
              <span className="nav_btn" onClick={logout}>
                logout
              </span>
            </li>
          ) : (
            //   {img ? (
            //     <img src={img.USER_GET.img} alt="" loading="lazy" className="profile" />
            //   ) : (
            //     <span></span>
            //   )}
            // </>

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
          <li className="cartIconContainer">
            <div className="cartIcon">
              <a href="/cart">
                <ProductsCartCount />
               
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
