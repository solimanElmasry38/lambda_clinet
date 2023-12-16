import { GlassOverLay } from "../../../components/GlassOverLay/overLay";
import "../auth.scss";
export const VerifyEmail = () => {
  return (
    <>
      <div className="authContainer">
        <GlassOverLay children={
   <div className="formContainer">
   <form action="" method="POST" className="authForm">
     <label htmlFor="otp">check your inbox</label>
     <input
       type="text"
       name="otp"
       id="otp"
       placeholder="otp"
     />

     

     
   </form>
   <button>submit</button>
 </div>
        }/>
     
      </div>
    </>
  );
};
