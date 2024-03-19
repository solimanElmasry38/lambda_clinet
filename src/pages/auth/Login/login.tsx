import {  useState } from 'react';
import { GlassOverLay } from '../../../components/GlassOverLay/overLay';
import '../auth.scss';
import { LazyBackground } from '../../../components/lazy';
import { useMutation } from '@apollo/client';
import { _Login } from '../../../gql/mutation/login.gql';
import Cookies from 'js-cookie';

const Login = (): JSX.Element => {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');

  const [LOGIN, { error }] = useMutation(_Login);

  const handelSubmit = async (e): Promise<void> => {
    e.preventDefault();
    await LOGIN({
      variables: {
        input: {
          email: email,
          password: pass
        }
      }
    }).then((res) => {
      Cookies.set('lambda_usr_id', res.data.LOGIN.id);
      Cookies.set('lambda_usr_token', res.data.LOGIN.token);
      location.replace('/');
    });
  };

  return (
    <LazyBackground
      src={'https://res.cloudinary.com/ddrulpeh5/image/upload/v1702826804/yv11nhvro6ia0yxrinwc.jpg'}
    >
      <GlassOverLay>
        {/* {go} */}
        <div className="formContainer">
          <form action="" method="POST" className="authForm">
            {error && <p className="err">* {error.message}</p>}
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
            <button onClick={(e) => handelSubmit(e)}>login</button>
          </form>
        </div>
      </GlassOverLay>
    </LazyBackground>
  );
};
export default Login;
