import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import * as projectActions from "../../redux/actions/projectActions";
import ProjectsModals from "../projects/ProjectsModals";
import $ from "jquery";
import { withTranslation } from "react-i18next";

class Projects extends Component {
  state = { showModal: false, content: [], shouldRedirect: false };

  componentDidMount() {
    this.props.actions.getProjects();

    if (window.location.hash.split("?")[1]) {
      window.location.hash = window.location.hash.split("?")[0];
    }
  }

  handleOpenModal = (content) => {
    this.setState({ showModal: true }, () => {
      window.dispatchEvent(new Event("hashchange")); // Hash değişimini tetikle
      this.setState({ content: content });
    });
    $("body").css("overflow", "hidden");
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
    $("body").css("overflow", "auto");
  };

  filter(e) {
    e.preventDefault();
    $(".filter-links .link").removeClass("active");
    $("#" + e.currentTarget.id).addClass("active");
    $(".projects .project-box").removeClass("active");
    $("." + e.currentTarget.id + "-box").addClass("active");
  }

  render() {
    const { showModal, content } = this.state;
    const { t } = this.props;

    return (
      <div className="projects-s">
        <div className="filter-links">
          <Link
            to={"/projects"}
            id="project"
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
        </div>
        <div className="projects-modals">
          <div className="projects">
            {this.props.projects.map((project) => (
              <div
                id={project.idName}
                className={"project-box active " + project.category}
                key={project.id}
              >
                <Link
                  to={"?id=" + project.idName}
                  onClick={() => this.handleOpenModal(project)}
                >
                  <div className="img">
                    <img src={project.imgPath} alt={project.idName} />
                  </div>
                  <div className={"hover " + project.hoverTxt}>
                    {project.name1 + " " + project.name2}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <ProjectsModals
            show={showModal}
            content={content}
            onClose={this.handleCloseModal}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projectsListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProjects: bindActionCreators(projectActions.getProjects, dispatch),
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Projects));
