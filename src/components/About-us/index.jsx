/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutSkillsProgress from "../../common/aboutSkillsProgress";

const AboutUs = () => {
  React.useEffect(() => {
    aboutSkillsProgress(
      document.querySelector(".about-cr .skills-box"),
      document.querySelectorAll(".skill-progress .progres"),
      document.querySelector(".about-cr")
    );
  }, []);
  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 img md-mb50">
            <img src="/img/portfolio/projects/creative/lusion.co/Screenshot_4.png" alt="" />
          </div>
          <div className="col-lg-5 valign">
            <div className="cont full-width">
              <h3 className="color-font">Vision Creative</h3>
              <h5 className="co-tit mb-15">
                I aim to provide appealing visual solutions.
              </h5>
              <p>
                As a UI/UX focused developer, I strive to create intuitive and visually captivating user experiences that elevate digital products to new heights.
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">UI / UX Design</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="100%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Apps Development</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="100%"></div>
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

export default AboutUs;
