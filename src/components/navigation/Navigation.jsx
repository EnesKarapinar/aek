import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="navbar">
          <div className="logo">
            <Link to="/" aria-label="Anasayfa">
              <img
                alt="Logo"
                src="https://eneskarapinar.github.io/aek/img/aekLogoBlack2.webp"
              />
              <img
                alt="Logo"
                src="https://eneskarapinar.github.io/aek/img/aekLogoWhite2.webp"
              />
            </Link>
          </div>
          <div className="content">
            <div className="pages">
              <Link to="/" className="page active">
                <h6>Anasayfa</h6>
                <span className="line"></span>
              </Link>
              <Link to="about" className="page">
                <h6>Hakkımda</h6>
                <span className="line"></span>
              </Link>
              <Link to="projects" className="page">
                <h6>Projeler</h6>
                <span className="line"></span>
              </Link>
              <Link to="certificates" className="page">
                <h6>Sertifikalar</h6>
                <span className="line"></span>
              </Link>
              <Link href="contact" className="page">
                <h6>İletişim</h6>
                <span className="line"></span>
              </Link>
            </div>
            <div className="settings">
              <div className="languages">
                <span>EN</span>
                <span>TR</span>
              </div>
              <div className="dark-light-mode">
                <svg
                  id="dark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16.66 16.8"
                >
                  <path
                    d="M16.39,15.91C12.07,13.71,13,8,15.11,6.6a8.93,8.93,0,0,0-6.44,3c-2.46,3-2.54,6.33-.84,9.76S14.6,24.19,17.61,23a8.41,8.41,0,0,0,5.72-8.12A5.51,5.51,0,0,1,16.39,15.91Zm-1.9,5.75a6.54,6.54,0,0,1-6.1-6.17A7,7,0,0,1,11.84,9a7.77,7.77,0,0,0,2,7.1c3.6,3.29,7.06,2,7.06,2A6.51,6.51,0,0,1,14.49,21.66Z"
                    transform="translate(-6.67 -6.6)"
                  />
                </svg>
                <svg
                  id="light"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16.8 16.8"
                >
                  <path
                    d="M15,10.27a4.7,4.7,0,1,0,4.7,4.7A4.69,4.69,0,0,0,15,10.27Zm0,7.87A3.17,3.17,0,1,1,18.19,15,3.17,3.17,0,0,1,15,18.14Z"
                    transform="translate(-6.6 -6.6)"
                  />
                  <rect x="7.64" width="1.53" height="2.71" rx="0.76" />
                  <rect
                    x="7.64"
                    y="14.09"
                    width="1.53"
                    height="2.71"
                    rx="0.76"
                  />
                  <rect
                    x="7.15"
                    y="13.65"
                    width="1.61"
                    height="2.71"
                    rx="0.81"
                    transform="translate(16.35 0.45) rotate(90)"
                  />
                  <rect
                    x="21.24"
                    y="13.65"
                    width="1.61"
                    height="2.71"
                    rx="0.81"
                    transform="translate(30.45 -13.65) rotate(90)"
                  />
                  <rect
                    x="19.2"
                    y="8.67"
                    width="1.61"
                    height="2.71"
                    rx="0.81"
                    transform="translate(6.35 -17.81) rotate(45)"
                  />
                  <rect
                    x="19.2"
                    y="18.61"
                    width="1.61"
                    height="2.71"
                    rx="0.81"
                    transform="translate(41.67 13.34) rotate(135)"
                  />
                  <rect
                    x="9.24"
                    y="8.67"
                    width="1.61"
                    height="2.71"
                    rx="0.81"
                    transform="translate(-10.75 3.44) rotate(-45)"
                  />
                  <rect
                    x="9.24"
                    y="18.61"
                    width="1.61"
                    height="2.71"
                    rx="0.81"
                    transform="translate(-3.57 34.58) rotate(-135)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
