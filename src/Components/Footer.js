import React, {useState} from "react";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="color">
        <div className="wrappers">
          <h1 className="footerH1">Questions? Contact us.</h1>
          <div className="FootSeg">
            <div className="Foot">
              <h2 className="footerText">FAQ</h2>
              <h2 className="footerText">Investor Relations</h2>
              <h2 className="footerText">Privacy</h2>
              <h2 className="footerText">Speed Test</h2>
            </div>
            <div className="Foot">
              <h2 className="footerText">Help Center</h2>
              <h2 className="footerText">Jobs</h2>
              <h2 className="footerText">Cookie Preferences</h2>
              <h2 className="footerText">Legal Notices</h2>
            </div>
            <div className="Foot">
              <h2 className="footerText">Account</h2>
              <h2 className="footerText">Ways to Watch</h2>
              <h2 className="footerText">Corporate Information</h2>
              <h2 className="footerText">Only on Netflix</h2>
            </div>
            <div className="Foot">
              <h2 className="footerText">Media Center</h2>
              <h2 className="footerText">Terms of Use</h2>
              <h2 className="footerText">Contact Us</h2>
            </div>
          </div>
          <div>
            <button onClick={toggleDropdown} className="top"><i class='bx bx-globe'></i> English <i class='bx bxs-down-arrow'></i></button>
            {isOpen && (
              <ul>
                <li>English</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
