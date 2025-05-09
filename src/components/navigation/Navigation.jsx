import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as app from "../../js/app";
import * as changesActions from "../../redux/actions/changesActions";
import $ from "jquery";
import { withTranslation } from "react-i18next";

class Navigation extends Component {
  componentDidMount() {
    app.activePage(window.location.hash);
    this.getTheme();
    this.getLanguage();
  }

  componentDidUpdate() {
    this.getTheme();
    this.getLanguage();
  }

  changeLanguage = () => {
    if (localStorage.getItem("i18nextLng") === "en") {
      $("nav").removeClass("en");
      $("html").attr("lang", "tr");
      this.props.i18n.changeLanguage("tr");
    } else {
      $("nav").addClass("en");
      $("html").attr("lang", "en");
      this.props.i18n.changeLanguage("en");
    }
  };

  getLanguage() {
    // Dilin Ilk Acilista Yuklenmesi
    if (localStorage.getItem("i18nextLng") === "en") {
      $("nav").addClass("en");
      $("html").attr("lang", "en");
    } else {
      $("nav").removeClass("en");
      $("html").attr("lang", "tr");
    }
  }

  getTheme() {
    if (this.props.theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  changeTheme = () => {
    const newTheme = this.props.theme === "light" ? "dark" : "light";
    this.props.actions.changeTheme(newTheme);
  };

  render() {
    const { t } = this.props;

    return (
      <nav>
        <div className="navbar">
          <div className="logo">
            <Link
              to="/"
              aria-label="Anasayfa"
              onClick={(e) => app.activePage("#/", e)}
            >
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
              <Link
                to="/"
                className="page navHome"
                onClick={(e) => app.activePage("#/", e)}
              >
                <h6>{t("nav_home")}</h6>
                <span className="line"></span>
              </Link>
              <Link
                to="about"
                className="page navAbout"
                onClick={(e) => app.activePage("#/about", e)}
              >
                <h6>{t("nav_about")}</h6>
                <span className="line"></span>
              </Link>
              <Link
                to="projects"
                className="page navProjects"
                onClick={(e) => app.activePage("#/projects", e)}
              >
                <h6>{t("nav_projects")}</h6>
                <span className="line"></span>
              </Link>
              <Link
                to="certificates"
                className="page navCertificates"
                onClick={(e) => app.activePage("#/certificates", e)}
              >
                <h6>{t("nav_certificates")}</h6>
                <span className="line"></span>
              </Link>
              <Link
                to="contact"
                className="page navContact"
                onClick={(e) => app.activePage("#/contact", e)}
              >
                <h6>{t("nav_contact")}</h6>
                <span className="line"></span>
              </Link>
            </div>
            <div className="settings">
              <div className="languages" onClick={this.changeLanguage}>
                <span>EN</span>
                <span>TR</span>
              </div>
              <div className="dark-light-mode" onClick={this.changeTheme}>
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

function mapStateToProps(state) {
  return {
    theme: state.changeThemeReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeTheme: bindActionCreators(changesActions.changeTheme, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Navigation));
