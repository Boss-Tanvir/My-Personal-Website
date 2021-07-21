import React from "react";
import "./Skills.scss";
const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="row">
          {/* Skill - 1 */}
          <div className="col-xxl-6">
            <div className="tab_content">
              <div className="skill_item">
                <p>Html</p>
                <div className="progresses inner_shadow">
                  <div
                    className="progress_bar"
                    style={{ width: "calc(60% - 14px)" }}
                  >
                    <span>60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Skill - 2 */}
          <div className="col-xxl-6">
            <div className="tab_content">
              <div className="skill_item">
                <p>JavaScript</p>
                <div className="progresses inner_shadow">
                  <div
                    className="progress_bar"
                    style={{ width: "calc(80% - 14px)" }}
                  >
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Skill - 3 */}
          <div className="col-xxl-6">
            <div className="tab_content">
              <div className="skill_item">
                <p>Bootstrap</p>
                <div className="progresses inner_shadow">
                  <div
                    className="progress_bar"
                    style={{ width: "calc(70% - 14px)" }}
                  >
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Skill - 4 */}
          <div className="col-xxl-6">
            <div className="tab_content">
              <div className="skill_item">
                <p>React Js</p>
                <div className="progresses inner_shadow">
                  <div
                    className="progress_bar"
                    style={{ width: "calc(50% - 14px)" }}
                  >
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Skill - 5 */}
          <div className="col-xxl-6">
            <div className="tab_content">
              <div className="skill_item">
                <p>Redux</p>
                <div className="progresses inner_shadow">
                  <div
                    className="progress_bar"
                    style={{ width: "calc(40% - 14px)" }}
                  >
                    <span>40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Skill - 6 */}
          <div className="col-xxl-6">
            <div className="tab_content">
              <div className="skill_item">
                <p>TypeScript</p>
                <div className="progresses inner_shadow">
                  <div
                    className="progress_bar"
                    style={{ width: "calc(40% - 14px)" }}
                  >
                    <span>40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
