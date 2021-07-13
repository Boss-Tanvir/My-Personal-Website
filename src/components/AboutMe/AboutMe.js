import React from "react";
import profile from "../../images/profile-pic.png";
import "./AboutMe.scss";
const AboutMe = () => {
  return (
    <section className="about_me">
      <div className="container">
        <div className="section_title mb-5">
          <p>Main Info</p>
          <h2>About Me</h2>
        </div>
        <div className="row">
          <div className="col-xxl-5 about_div">
            <div className="inner_shadow about_img">
              <img src={profile} alt="" className="outer_shadow" />
            </div>
            <div className="social_media_icon">
              <a href="">
                <i class="fab fa-facebook-f outer_shaddow hover_in_shadow btn_1"></i>
              </a>
              <a href="">
                <i class="fab fa-twitter outer_shaddow hover_in_shadow btn_1"></i>
              </a>
              <a href="">
                <i class="fab fa-instagram outer_shaddow hover_in_shadow btn_1"></i>
              </a>
              <a href="">
                <i class="fab fa-linkedin-in outer_shaddow hover_in_shadow btn_1"></i>
              </a>
            </div>
          </div>
          <div className="col-xxl-7">
            <div className="about_info">
              <p className="mb-3">
                <span>
                  Hi!! My name is Tanvir Ahamed. I am a Web Developer.
                </span>{" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium sunt beatae obcaecati repellendus velit quibusdam
                architecto neque tempora! A sapiente saepe dicta officia autem,
                error laborum rerum at fugit consequatur! Voluptatem, eveniet
                ex! Excepturi, repudiandae illo quisquam harum, laborum sint
                tempora error quos ipsum quasi enim modi et incidunt commodi.{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                ratione, at sunt doloremque est aut tenetur ad, architecto optio
                dolores quas, autem qui! Alias praesentium eum officiis debitis
                deleniti similique! Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Laudantium nihil harum incidunt ipsa neque
                numquam ut ullam sequi assumenda recusandae?
              </p>
              <a href="#" className="outer_shaddow hover_in_shadow btn_1 me-3">
                Download CV
              </a>
              <a href="" className="outer_shaddow hover_in_shadow btn_1">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
