import React from "react";
import FAQ from "./FAQ";
import { Link } from "react-router-dom"
import Footer from "./Footer";
import Movies from "./Movies";

const LandingPage = () => {
  return (
    <>
    <div className="landingPageStart">
      <div className="Landing">
         <div className="backgroundEffect">
            <div className="nav">
                <Link to="/"><img src={"./IMAGES/Netflix005.png"} alt="Logo" className="Img" /></Link>
                <Link to="/SignUp" className="links"><button className="btn text-white">Sign in</button></Link>
            </div>
            <div className="Text">
                <h1 className="h1">Unlimited movies, TV shows, and more</h1>
                <p className="p1">Watch anywhere. Cancel anytime.</p>
                <p className="p2">Ready to watch? Enter your email to create or restart your membership.</p>
                <form action="" className="form">
                    <input type="email" placeholder="Email address" className="input"/>
                    <button type="submit" className="btns" required>Get Started<i class='bx bxs-chevron-right'></i></button>
                </form>
            </div>
        </div>
      </div>
      <Movies />
      <FAQ />
      <Footer />
    </div>
    </>
  );
};

export default LandingPage;