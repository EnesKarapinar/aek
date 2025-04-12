import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ProjectsModals extends Component {
  render() {
    const { show, onClose, content } = this.props;

    if (content.length !== 0)
      return (
        <div className={"modals " + (show ? "active" : "")}>
          <div
            id={content.idName + "-modal"}
            className={"modal " + (show ? "active" : "")}
          >
            <div className="top">
              <div className="img">
                <img src={content.imgPath} alt={content.idName} />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    {content.name1} <span>{content.name2}</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>{content.projectType}</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>{content.deliveryDate}</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>{content.langsAndTech}</span>
                  </h4>
                  <h4>
                    Açıklama: <span>{content.desc}</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="btns">
                <Link
                  to={"/projects"}
                  onClick={onClose}
                  className="close-modal"
                >
                  <span>
                    <svg
                      id="close"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.29 16.93"
                    >
                      <path
                        d="M18.84,10.09,17.31,11.5,20,14.06H12V16h8L17.31,18.5,18.86,20l4.71-4.77a.25.25,0,0,0,0-.36Z"
                        transform="translate(-6.36 -6.53)"
                      />
                      <path
                        d="M14.8,22v1.43H7.26A2.16,2.16,0,0,1,6.36,22V8S6.65,6.53,7.8,6.53h7V7.94H8.69a.43.43,0,0,0-.46.46V21.59a.47.47,0,0,0,.48.48Z"
                        transform="translate(-6.36 -6.53)"
                      />
                    </svg>
                  </span>
                  Kapat
                </Link>
                <Link to={content.link} target="_blank">
                  Siteye Gir
                  <span>
                    <svg
                      id="open"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16.4 16.93"
                    >
                      <polygon points="15.98 0 14.21 0 9.75 0 9.75 2.19 12.93 2.19 4.62 10.45 6 11.79 14.21 3.58 14.21 6.64 16.4 6.64 16.4 0 15.98 0" />
                      <path
                        d="M21,15.87v5.31H8.62V8.74h6.2V6.53H8.18S6.8,7,6.8,7.91V22.12s.26,1.35,1.34,1.35H21.85s1.34-.17,1.34-1.34V15H21Z"
                        transform="translate(-6.8 -6.53)"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default connect()(ProjectsModals);
