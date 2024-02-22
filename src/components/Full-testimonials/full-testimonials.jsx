/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
        className={`testimonials ${this.props.withIMG
          ? "section-padding bg-img"
          : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding ? ""
              : "section-padding"
          } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
            }`,
        }}
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Testimonials
                  </h6>
                  <h3 className="wow color-font">
                    Meet my clients from all over the world.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Niroj Ghale
                        </h6>
                        <span className="author-details">
                          Senior Developer<br /> Iris Lash
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    He&apos;s very good skills and I liked his work.
                    Dedication, expertise, and professionalism have truly made a significant impact on the success of this project.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/2.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Roman Ivanov
                        </h6>
                        <span className="author-details">
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Excellent working with Vladyslav. He&apos;s very easy to work with and really helpful. He pays close attention to details and did everything in a timely manner
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/3.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Alice Thompson
                        </h6>
                        <span className="author-details">

                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    He is a very fast and responsive worker. I came to him with a tight deadline for my project and he hit the ground running. Recommend him for his wordpress site development skills.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/4.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Ethan Mitchell
                        </h6>
                        <span className="author-details">

                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    He is amazing to work with. Quick communication and a lot of experience that shows in his work. Highly recommend working with him. I for sure will work again with him in the future!
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default FullTestimonials;
