import React, { Component } from "react";
import { connect } from "react-redux";
import "../../js/typewriter";
// import { bindActionCreators } from "redux";
// import * as categoryActions from "../../redux/actions/categoryActions";
// import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="text">
          <div className="top">
            <span className="line"></span>
            <h3
              className="typewrite"
              data-period="2000"
              data-type='[ "Software Engineer", "Web Developer" ]'
            >
              <span className="wrap"></span>
            </h3>
          </div>
          <div className="bottom">
            <h1 data-translate="homepage-hood">
              Merhaba, Ben Abdullah Enes KARAPINAR
            </h1>
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

export default connect()(Homepage);
