import LogoDark from "../assets/images/logo-dark.svg";
import { Link } from "react-router-dom";
import PlayStoreBtn from "./playStoreBtn";
import playStoreLogo from "../assets/images/playStoreLogo.svg";
import appleLogo from "../assets/images/Apple_logo.svg";
import Button from "./button";

const Footer = () => {
  return (
    <>
      <div className="footer row m-0 p-0 pt-5 justify-content-center">
        <div className="footer-content row col-10 justify-content-center">
          <div className="col-3 d-flex flex-column align-items-center">
            <h3 className="crunch-font m-0 p-0 mb-4">FOLLOW US</h3>
            <div className="row m-0 p-0">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                className="m-0 p-0 w-auto ms-0"
              >
                <div className="icon rounded-circle d-flex m-0 p-0 justify-content-center align-items-center">
                  <i
                    className="w-auto m-0 p-0 bi bi-facebook fs-4"
                    aria-hidden="true"
                  ></i>
                </div>
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                className="m-0 p-0 w-auto ms-1"
              >
                <div className="icon rounded-circle d-flex m-0 p-0 justify-content-center align-items-center">
                  <i
                    className="w-auto m-0 p-0 bi bi-instagram fs-4"
                    aria-hidden="true"
                  ></i>
                </div>
              </Link>
              <Link
                to="https://www.twitter.com/"
                target="_blank"
                className="m-0 p-0 w-auto ms-1"
              >
                <div className="icon rounded-circle d-flex m-0 p-0 justify-content-center align-items-center">
                  <i
                    className="w-auto m-0 p-0 bi bi-twitter-x fs-4"
                    aria-hidden="true"
                  ></i>
                </div>
              </Link>
              <Link
                to="https://www.youtube.com/"
                target="_blank"
                className="m-0 p-0 w-auto ms-1"
              >
                <div className="icon rounded-circle d-flex m-0 p-0 justify-content-center align-items-center">
                  <i
                    className="w-auto m-0 p-0 bi bi-youtube fs-4"
                    aria-hidden="true"
                  ></i>
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/"
                target="_blank"
                className="m-0 p-0 w-auto ms-1"
              >
                <div className="icon rounded-circle d-flex m-0 p-0 justify-content-center align-items-center">
                  <i
                    className="w-auto m-0 p-0 bi bi-linkedin fs-4"
                    aria-hidden="true"
                  ></i>
                </div>
              </Link>
            </div>
            <Link to="/" className="m-0 p-0">
              <img
                src={LogoDark}
                alt="Logo dark"
                className=" m-0 p-0 mt-4 w-auto"
              />
            </Link>
          </div>
          <div className="col-3 d-flex flex-column align-items-center">
            <h3 className="crunch-font m-0 p-0 mb-4">DOWNLOAD APP</h3>
            <div className="" style={{ width: "15rem" }}>
              <PlayStoreBtn
                logo={playStoreLogo}
                para="GET IT ON"
                head="GOOGLE PLAY"
              />
            </div>
            <div className="mt-4" style={{ width: "15rem" }}>
              <PlayStoreBtn
                logo={appleLogo}
                para="DOWNLOAD ON THE"
                head="APP STORE"
              />
            </div>
          </div>
          <div className="col-3 d-flex flex-column align-items-center">
            <h3 className="crunch-font m-0 p-0 mb-4">SUBSCRIBE</h3>
            <form action="" className="m-0 p-0 w-100">
              <input
                className="m-0 p-2 mb-3 rounded-5 w-100"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <input
                className="m-0 p-2 mb-3 rounded-5 w-100"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <div className="d-flex w-100 justify-content-center align-items-center">
                <Button content="Submit" />
              </div>
            </form>
          </div>
          <div className=" quicks-links col-3 d-flex flex-column align-items-center">
            <h3 className="crunch-font m-0 p-0 mb-4">QUICK LINKS</h3>
            <Link to="/" className="kiddo-font m-0 p-0">
              <p className="m-0 p-0 kiddo-font fs-3">Courses</p>
            </Link>
            <Link to="/" className="kiddo-font m-0 p-0">
              <p className="m-0 p-0 kiddo-font fs-3">dictionary</p>
            </Link>
            <Link to="/" className="kiddo-font m-0 p-0">
              <p className="m-0 p-0 kiddo-font fs-3">Books</p>
            </Link>
            <Link to="/" className="kiddo-font m-0 p-0">
              <p className="m-0 p-0 kiddo-font fs-3">Gallery</p>
            </Link>
            <Link to="/" className="kiddo-font m-0 p-0">
              <p className="m-0 p-0 kiddo-font fs-3">Events</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-last row m-0 p-3  justify-content-between align-items-center">
        <div className="w-auto d-flex">
          <Link to="/privacy" className="text-light w-auto">
            PRIVACY POLICY
          </Link>
          <p className="m-0 p-0 text-light w-auto ps-2 pe-2"> | </p>
          <Link to="/privacy" className="text-light w-auto">
            TERMS OF USE
          </Link>
          <p className="m-0 p-0 text-light w-auto ps-2 pe-2"> | </p>
          <Link to="/privacy" className="text-light w-auto">
            COPYRIGHT
          </Link>
        </div>
        <div className="w-auto d-flex">
          <p className="m-0 p-0 text-light">© 2024 Hamzabaan™ |  All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
