import { useState } from "react";
import { GlassOverLay } from "../../../components/GlassOverLay/overLay";
import "../auth.scss";
import { useMutation } from "@apollo/client";
import { VerifyEmail_sch } from "../../../gql/mutation/verifyEmail.gql";
import Cookies from "js-cookie";
import { LazyBackground } from "../../../components/lazy";

export const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const [VERIFY_EMAIL] = useMutation(VerifyEmail_sch);

  async function handelSubmit(): Promise<void> {
    try {
      await VERIFY_EMAIL({
        variables: {
          otp,
          id: Cookies.get("language"),
        },
      }).then((res) => {
        Cookies.set("lambda_usr_token", res.data.VERIFY_EMAIL.token);
        location.replace("/");
      });
    } catch (err) {}
  }

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
            }
          />
        }
      />
    </>
  );
};
