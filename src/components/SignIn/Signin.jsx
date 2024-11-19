import React from "react";
import "./Signin.css";
import amazonlogo from "../../assets/amazoncom_black.svg";

const Signin = () => {
  function validation() {
    const inpVal = document.querySelector("#email-inp").value;
    const pattern = /^[a-zA-Z0-9]+@explorin.io$/;
    if (pattern.test(inpVal)) {
      document.querySelector(".signin-error-msg").innerHTML = "Correct";
      4;
    } else {
      document.querySelector(".signin-error-msg").innerHTML =
        "There is a problem";
    }
  }
  return (
    <div className="sign-in-container">
      <img src={amazonlogo} alt="" className="sign-in-logo" />
      <div className="sign-in-innercontainer">
        <form className="sign-in-card">
          <h2>Sign in</h2>
          <div className="email-container">
            <label for="email-inp">Email</label>
            <input id="email-inp" type="text" />
            <p className="signin-error-msg"></p>
          </div>
          <button
            type="submit"
            className="continue-btn"
            onClick={(event) => {
              event.preventDefault();
              validation();
            }}
          >
            Continue
          </button>
          <p>
            By continuing, you agree to Amazon's{" "}
            <a href="">Conditions of Use</a> and
            <a href=""> Privacy Notice</a>.
          </p>
          <p href="">Need Help?</p>
          <div className="amazon-bussiness-container">
            <p>Buying for Work?</p>
            <a href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fbusiness%2Fregister%2Fcheck%2Fstatus%3Fref_%3Dab_welcome_bw_ckab_dsk%26originalRef%3Dab_reg_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_ab_reg_web_in&openid.mode=checkid_setup&marketPlaceId=A21TJRUUN4KGV&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=ab_welcome_login_in&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&switch_account=signin&ref_=ab_welcome_bw_ap-sn_dsk&disableLoginPrepopulate=1">
              Shop on Amazon Bussiness
            </a>
          </div>
        </form>
        <p className="new-to-amazon">New to Amazon?</p>
        <button className="create-account">Create new Account</button>
      </div>
    </div>
  );
};

export default Signin;
