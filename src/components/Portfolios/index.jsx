/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Portfolios = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfolio
              </h6>
              <h3 className="wow color-font">
                Previous work
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".creative">Creative</span>
              <span data-filter=".ecommerce">Ecommerce</span>
              <span data-filter=".blockchain">Blockchain</span>
              <span data-filter=".mobile">Mobile</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div className="col-md-6 items creative lg-mr wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Lusion</h6>
                  <p>Awesome animation powered with Three.js</p>
                </div>
                <Link href={`/projects/web/1`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/creative/lusion.co/Screenshot_1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items creative wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Get My Boat</h6>
                  <p>A premier online platform using cutting-edge web development technologies that seamlessly connect owners and captains</p>
                </div>
                <Link href={`/projects/web/2`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/creative/getmyboat.com/Screenshot_1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items creative wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Switch</h6>
                  <p>Innovative design and useer friendly features bring to life the mission of revolutionlizing food choices</p>
                </div>
                <Link href={`/projects/web/3`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/creative/Switch-Restaurant/Screenshot_47.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items ecommerce wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>SHOP Tobi</h6>
                  <p>Our own productions is a guarantee of quality and timely delivery</p>
                </div>
                <Link href={`/projects/web/4`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/ecommerce/shoptobi.com.ua/01.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Ecommerce</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items ecommerce wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>PHANOX</h6>
                  <p>Wireless HeadPhone</p>
                </div>
                <Link href={`/projects/web/5`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/ecommerce/phanox.vercel.app/1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Ecommerce</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items ecommerce wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Sweet Dreams</h6>
                  <p>Say Goodbye To Restless Nights In Just 30 Minutes</p>
                </div>
                <Link href={`/projects/web/6`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/ecommerce/mysweetdreams.co/01.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Ecommerce</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items blockchain wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Guiser</h6>
                  <p>Crafted using advanced web development technologies to deliver dynamic and user-friendly platform integrated blockchain technology</p>
                </div>
                <Link href={`/projects/web/7`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/blockchain/guiser.org/Screenshot_1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Blockchain</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items blockchain wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Trality</h6>
                  <p>Automate your crypto investing</p>
                </div>
                <Link href={`/projects/web/8`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/blockchain/trality/1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Blockchain</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items blockchain wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Coreto</h6>
                  <p>Crypto made easy for investors</p>
                </div>
                <Link href={`/projects/web/9`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/blockchain/coreto/1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Blockchain</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items blockchain wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Haru</h6>
                  <p>Invite friends and earn 10 USDT!</p>
                </div>
                <Link href={`/projects/web/10`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/blockchain/haruinvest.com/01.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Blockchain</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items mobile wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Family Locator - GPS Tracker</h6>
                  <p>Stay in touch and be connected - GPS technique</p>
                </div>
                <Link href={`/projects/mobile/1`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/mobile/FamilyLocator/1.png" style={{ aspectRatio: "1.9" }} alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Mobile</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items mobile wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Life in the UK Test Prep 2023</h6>
                  <p>Practise Test for Life in the UK</p>
                </div>
                <Link href={`/projects/mobile/2`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/mobile/LifeUK/1.png" style={{ aspectRatio: "1.9" }} alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Mobile</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items mobile wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Video Generator</h6>
                  <p>Generate video from images - built with Swift</p>
                </div>
                <Link href={`/projects/mobile/3`}>
                  <a className="rota">
                    <img src="/img/portfolio/projects/mobile/VideoApp/1.png" style={{ aspectRatio: "1.9" }} alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/past-work">Mobile</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
