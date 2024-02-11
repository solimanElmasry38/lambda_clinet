import { useState } from "react";
import { GlassOverLay } from "../../../components/GlassOverLay/overLay";
import "../auth.scss";
import { useMutation } from "@apollo/client";
import { _VerifyEmail } from "../../../gql/mutation/verifyEmail.gql";
import Cookies from "js-cookie";
import { LazyBackground } from "../../../components/lazy";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const [VERIFY_EMAIL] = useMutation(_VerifyEmail);

  async function handelSubmit(): Promise<void> {
    try {
      await VERIFY_EMAIL({
        variables: {
          input: {
            otp,
            id: Cookies.get("lambda_usr_id"),
          },
        },
      }).then((res) => {
        Cookies.set("lambda_usr_token", res.data.VERIFY_EMAIL.token);
        location.replace("/");
      });
    } catch (err) {}
  }

  return (
    <LazyBackground
      src={
        "https://res.cloudinary.com/ddrulpeh5/image/upload/v1702826804/yv11nhvro6ia0yxrinwc.jpg"
      }
    >
      <GlassOverLay>
        <div className="formContainer">
          <form action="" method="POST" className="authForm">
            <label htmlFor="otp">check your inbox</label>
            <input
              type="text"
              name="otp"
              id="otp"
              placeholder="otp"
              onChange={(e) => setOtp(e.target.value)}
            />
          </form>
          <button onClick={() => handelSubmit()}>submit</button>
        </div>
      </GlassOverLay>
    </LazyBackground>
  );
};
export default VerifyEmail;
