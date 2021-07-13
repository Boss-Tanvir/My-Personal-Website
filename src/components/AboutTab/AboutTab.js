import React from "react";
import "./AboutTab.scss";
const AboutTab = () => {
  return (
    <section className="about_tab p-5">
      <div className="row">
        <div className="col-xxl-12 text-center">
          <div className="about_tabs">
            <span
              className="tab_item outer_shadow active"
              data-target=".skills"
            >
              Skills
            </span>
            <span className="tab_item me-3" data-target=".experience">
              Experience
            </span>
            <span className="tab_item" data-target=".education">
              Education
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTab;
