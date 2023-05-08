import React from "react";
import {Link} from "react-router-dom"

function Form() {
  return (
    <div className="SignUp">
      <nav className="navs">
        <Link to="/">
          <img src={"./IMAGES/Netflix005.png"} alt="Logo" className="Img" />
        </Link>
        <div className="register">
          <h1 className="Reg1">Sign In</h1>
          <form className="GroupedForm">
            <div className="form-group">
              <input type="email" className="RegInputs" placeholder="Email or phone number"/>
              <input type="password" placeholder="*******" className="RegInputs" />
            </div>
            <button typeof="submit" className="buttons">Sign In</button>
            <div className="sec">
              <p><input type="checkbox" className=""/> Remembr me</p>
              <p>Need help</p>
            </div>
            <div className="details">
              <p className="New">New to Netflix? <Link className="link">Sign up now.</Link></p>
              <p className="Last">This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to="/">Learn more.</Link></p>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Form;
