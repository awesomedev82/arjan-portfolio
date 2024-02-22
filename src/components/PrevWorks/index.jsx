/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  const tabContainerRef = useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  return (
    <section
      className={`${grid ? (grid === 3 ? "three-column" : null) : null
        } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Portfolio
                </h6>
                <h3 className="wow color-font">
                  Previous Projects Demonstrating My Skills.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
                } col-12`}
            >
              <div className="filter" ref={tabContainerRef}>
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".creative">Creative</span>
                <span data-filter=".ecommerce">Ecommerce</span>
                <span data-filter=".blockchain">Blockchain</span>
                <span data-filter=".mobile">Mobile</span>
              </div>
            </div>
          )}

          <div className="gallery full-width">
            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items creative wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/web/1`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/creative/lusion.co/Screenshot_1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <a href={`https://lusion.co/`} target="_blank" rel="noreferrer"><h6>Lusion</h6></a>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items creative wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/web/2`} >
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/creative/getmyboat.com/Screenshot_1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <a href={`https://www.getmyboat.com/`} target="_blank" rel="noreferrer"><h6>Get My Boat</h6></a>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items creative wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/web/3`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/creative/Switch-Restaurant/Screenshot_47.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <a href={`https://switch-restaurant.vercel.app/home.html`} target="_blank" rel="noreferrer"><h6>Switch</h6></a>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items ecommerce wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/web/4`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/ecommerce/shoptobi.com.ua/01.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <a href={`https://shoptobi.com.ua/`} target="_blank" rel="noreferrer"><h6>SHOPTobi</h6></a>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items ecommerce wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/web/5`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/ecommerce/phanox.vercel.app/1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <a href={`https://phanox.vercel.app/`} target="_blank" rel="noreferrer"><h6>PHANOX</h6></a>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items ecommerce wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/web/6`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/ecommerce/mysweetdreams.co/01.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <a href={`https://mysweetdreams.co/`} target="_blank" rel="noreferrer"><h6>Sweet Dreams</h6></a>
              </div>
            </div>
            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items blockchain wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/web/7`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/blockchain/guiser.org/Screenshot_1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <a href={`https://guiser.org/`} target="_blank" rel="noreferrer"><h6>Guiser</h6></a>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items blockchain wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/web/8`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/blockchain/trality/1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <a href={`https://www.trality.com/`} target="_blank" rel="noreferrer"><h6>Trality</h6></a>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items blockchain wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/web/9`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/blockchain/coreto/1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <a href={`https://www.coreto.io/`} target="_blank" rel="noreferrer"><h6>Coreto</h6></a>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items blockchain wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/web/10`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/blockchain/haruinvest.com/01.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <a href={`https://webapp.haruinvest.com/`} target="_blank" rel="noreferrer"><h6>Haru</h6></a>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items mobile wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/mobile/1`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/mobile/FamilyLocator/1.png" style={{ aspectRatio: "1.9" }} alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Family Locator - GPS Tracker</h6>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items mobile wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/mobile/2`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/mobile/LifeUK/1.png" style={{ aspectRatio: "1.9" }} alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Life in the UK Test Prep 2023</h6>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items mobile wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/projects/mobile/3`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/projects/mobile/VideoApp/1.png" style={{ aspectRatio: "1.9" }} alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Video Generator</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
