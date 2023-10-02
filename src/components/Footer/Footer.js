import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="Footer">
      <div className="footerMain">
        <div className="navigation">
          <h3>navigation</h3>
          <ul>
            <NavLink to="/cv">
              <li>Main</li>
            </NavLink>
            <NavLink to="/About">
              <li>About</li>
            </NavLink>
            <NavLink to="/Skills">
              <li>Skills</li>
            </NavLink>
            <NavLink to="/Certificate">
              <li>Certificate</li>
            </NavLink>
            <NavLink to="/Contacts">
              <li>Contacts</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <h3>Contacts</h3>
          <ul className="contacts">
            <li>
              <p>
                <i class="fa fa-map-marker" aria-hidden="true"></i> Armenia
                Armavir/Metsamor
                <br />1 District 0910
              </p>
            </li>
            <li>
              <p>
                <i className="fa fa-phone"> +374 33 59 29 29</i>
              </p>
            </li>
            <li>
              <p>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                sevakarakelyann@gmail.com
              </p>
            </li>
          </ul>
        </div>
        <div className="social">
          <h3>Social Media</h3>
          <p>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-telegram"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-facebook"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
