import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import * as personalActions from "../../redux/actions/personalActions";
import * as projectActions from "../../redux/actions/projectActions";
import { withTranslation } from "react-i18next";

class About extends Component {
  componentDidMount() {
    this.props.actions.getPersonalInfo();
    this.props.actions.getProjects();
  }

  updateSkillsBottom = (val) => {
    return `${(200 * val) / 100 - 10}px`;
  };

  updateSkillsHeight = (val) => {
    return `${(200 * val) / 100}px`;
  };

  render() {
    const { t } = this.props;

    if (
      this.props.personalInfo.length !== 0 &&
      this.props.projects.length !== 0
    )
      return (
        <div className="about">
          <div className="personel-info">
            <div className="hood">
              <h2>
                {t("personel")} <span>{t("information")}</span>
              </h2>
              <span className="underline"></span>
            </div>
            <div className="content">
              <div className="right">
                <div className="top">
                  <div className="name-lastname">
                    <h4>
                      {t("name")} <span>{this.props.personalInfo.name}</span>
                    </h4>
                    <h4>
                      {t("surname")}
                      <span>{this.props.personalInfo.surname}</span>
                    </h4>
                  </div>
                  <div className="birthday-country">
                    <h4>
                      {t("year_birth")}
                      <span>{this.props.personalInfo.birth_date}</span>
                    </h4>
                    <h4>
                      {t("country")}
                      <span>{this.props.personalInfo.nation}</span>
                    </h4>
                  </div>
                </div>
                <div className="bottom">
                  <h4>
                    {t("language")}
                    <span>{this.props.personalInfo.language}</span>
                  </h4>
                  <h4>
                    {t("email_address")}
                    <span>{this.props.personalInfo.email}</span>
                  </h4>
                  <h4>
                    {t("social_accounts")}
                    <span>
                      {this.props.personalInfo.social_medias.map(
                        (social_media) => (
                          <Link
                            to={social_media.link}
                            target="_blank"
                            key={social_media.name}
                          >
                            {social_media.name}
                          </Link>
                        )
                      )}
                    </span>
                  </h4>
                </div>
              </div>
              <div className="left">
                <div className="top">
                  <div className="experience">
                    <h4>{t("work_experience")}</h4>
                    <h5>
                      {this.props.personalInfo.work_experience} <span>+</span>
                    </h5>
                  </div>
                  <div className="project">
                    <h4>{t("complate_projects")}</h4>
                    <h5>
                      {this.props.projects.length} <span>+</span>
                    </h5>
                  </div>
                </div>
                <div className="bottom">
                  <a
                    href="https://eneskarapinar.github.io/aek/img/cv/Abdullah_Enes_Karapinar_CV.pdf"
                    download
                  >
                    {t("download_cv")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="skills">
            <div className="hood">
              <h2>{t("skills")}</h2>
              <span className="underline"></span>
            </div>
            <div className="content">
              {this.props.personalInfo.skills.map((skill) => (
                <div className="skill" key={skill.name}>
                  <div className="top">
                    <h5>{skill.name}</h5>
                    <h6>%{skill.compotence}</h6>
                  </div>
                  <div className="bottom">
                    <span
                      className="circle"
                      style={{
                        bottom: this.updateSkillsBottom(skill.compotence),
                      }}
                    ></span>
                    <span
                      className="background"
                      style={{
                        height: this.updateSkillsHeight(skill.compotence),
                      }}
                    ></span>
                    <span className="border"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    personalInfo: state.getPersonalInfoReducer,
    projects: state.projectsListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPersonalInfo: bindActionCreators(
        personalActions.getPersonalInfo,
        dispatch
      ),
      getProjects: bindActionCreators(projectActions.getProjects, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(About));
