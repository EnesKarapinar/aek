import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import * as certificateActions from "../../redux/actions/certificateActions";
import $ from "jquery";
import { withTranslation } from "react-i18next";

class Certificates extends Component {
  componentDidMount() {
    this.props.actions.getCertificates();

    if (window.location.hash.split("?")[1]) {
      window.location.hash = window.location.hash.split("?")[0];
    }
  }

  filter(e) {
    e.preventDefault();
    $(".filter-links .link").removeClass("active");
    $("#" + e.currentTarget.id).addClass("active");
    $(".certificates .certificate-box").removeClass("active");
    $("." + e.currentTarget.id + "-box").addClass("active");
  }

  render() {
    const { t } = this.props;

    return (
      <div className="certificates-s">
        <div className="filter-links">
          <Link
            to={"/certificates"}
            id="certificate"
            className="link active"
            onClick={(e) => this.filter(e)}
          >
            <h6>{t("all")}</h6>
            <span className="underline"></span>
          </Link>
          <Link
            to={"?filter=web-programming"}
            id="web-programlama"
            className="link"
            onClick={(e) => this.filter(e)}
          >
            <h6>{t("web_programming")}</h6>
            <span className="underline"></span>
          </Link>
          <Link
            to={"?filter=game-programming"}
            id="oyun-programlama"
            className="link"
            onClick={(e) => this.filter(e)}
          >
            <h6>{t("game_programming")}</h6>
            <span className="underline"></span>
          </Link>
          <Link
            to={"?filter=nasa"}
            id="nasa"
            className="link"
            onClick={(e) => this.filter(e)}
          >
            <h6>NASA</h6>
            <span className="underline"></span>
          </Link>
          <Link
            to={"?filter=cs"}
            id="cs"
            className="link"
            onClick={(e) => this.filter(e)}
          >
            <h6>C#</h6>
            <span className="underline"></span>
          </Link>
          <Link
            to={"?filter=contact"}
            id="iletisim"
            className="link"
            onClick={(e) => this.filter(e)}
          >
            <h6>{t("nav_contact")}</h6>
            <span className="underline"></span>
          </Link>
        </div>

        <div className="certificates">
          {this.props.certificates.map((certificate) => (
            <div
              key={certificate.id}
              className={"certificate-box active " + certificate.category}
            >
              <Link to={certificate.link} target="_blank">
                <div className="img">
                  <img src={certificate.imgPath} alt={certificate.category} />
                </div>
                <div className={"hover " + certificate.class}>
                  {certificate.desc}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    certificates: state.certificatesListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCertificates: bindActionCreators(
        certificateActions.getCertificates,
        dispatch
      ),
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Certificates));
