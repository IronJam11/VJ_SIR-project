import "./about.css"
 function AboutUs(){
    return (
      <>
        <section id="aboutus">
          <div className="aboutus">

            <img src="images\ABOUT US (1).png" alt="" />

            <div className="aboutus-navbar">

              <div className="aboutus-logo">
                <img src="images\logo.png" alt="" />
              </div>

              <div className="aboutus-profile">
                <div className="aboutus-profile-img">
                  <img src="images\profile.png" alt="" />
                </div>
                <div>Profile</div>
              </div>

              <div className="aboutus-Nav-item">
                <ul>
                  <li>
                    <Link className="links" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="#">
                      Resource
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/Mentorship">
                      Mentorship
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/AboutUs">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/Login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
            
          </div>
        </section>
      </>
    );
}
export default AboutUs