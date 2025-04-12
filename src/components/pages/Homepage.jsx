import React, { Component } from "react";
import { connect } from "react-redux";
import Typewriter from "../typewriter/Typewriter";
import { withTranslation } from "react-i18next";

class Homepage extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="homepage">
        <div className="text">
          <div className="top">
            <span className="line"></span>
            <Typewriter />
            {/* <h3
              className="typewrite"
              toRotate={["Hello, World!", "Welcome to React!", "Enjoy Coding!"]}
              period={2000}
            >
              <span className="wrap"></span>
            </h3> */}
          </div>
          <div className="bottom">
            <h1>{t("homepage_hood")}</h1>
          </div>
        </div>
        <div className="img">
          <span className="shadow"></span>
          <img
            alt="Profil Resmi"
            src="https://eneskarapinar.github.io/aek/img/ProfilePicture.webp"
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {},
  };
}
function mapStateToProps(state) {
  return {};
}

export default connect()(withTranslation()(Homepage));
