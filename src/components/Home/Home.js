import React from "react";
import "./Home.scss";
import profileImg from "../../images/profile-pic.png";
const Home = () => {
  return (
    <section className="home">
      {/* effect wrap */}
      <div className="effect_wrap">
        <div className="effect effect_1"></div>
        <div className="effect effect_2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="effect effect_3"></div>
        <div className="effect effect_4"></div>
        <div className="effect effect_5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6">
            <div className="home_text">
              <p>Hello</p>
              <h2>I am Tanvir Ahamed</h2>
              <h1>Web Designer & Developer</h1>
              <a href="" className="outer_shaddow hover_in_shadow btn_1">
                More About Me
              </a>
            </div>
          </div>
          <div className="col-xxl-6">
            <div className="home_img inner_shadow">
              <img src={profileImg} className="img-fluid outer_shadow" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
