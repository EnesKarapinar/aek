import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import * as personalActions from "../../redux/actions/personalActions";
import { withTranslation } from "react-i18next";

class Contact extends Component {
  componentDidMount() {
    this.props.actions.getPersonalInfo();
  }

  render() {
    const { t } = this.props;

    if (this.props.personalInfo.length !== 0)
      return (
        <div className="contact">
          <div className="content">
            <div className="right">
              <div className="top">
                <div className="email">
                  <svg
                    id="at"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16.84 16.65"
                  >
                    <path
                      d="M23.34,14.6A8.69,8.69,0,0,0,15,6.68c-3.5-.08-9.24,2.76-8.35,9.55a7.86,7.86,0,0,0,7.24,7.1H19V21.4s-1.31,0-4.18.09-7-2.4-6.7-6.37a6.79,6.79,0,0,1,13.47-1c.54,3.42-.38,3.61-1.42,3.61s-1-.69-1.2-3A4,4,0,0,0,14.88,11a3.93,3.93,0,0,0-3.94,5.3,3.79,3.79,0,0,0,5.71,2.39,1.68,1.68,0,0,1,2.5.33C19.65,19.44,24.08,20,23.34,14.6ZM15,17.6A2.6,2.6,0,1,1,17.6,15,2.59,2.59,0,0,1,15,17.6Z"
                      transform="translate(-6.58 -6.67)"
                    />
                  </svg>
                  <div className="text">
                    <h2>Email</h2>
                    <h4>{this.props.personalInfo.email}</h4>
                  </div>
                </div>
                <div className="adress">
                  <svg
                    id="location"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13.75 16.78"
                  >
                    <path
                      d="M15.16,6.61s-6.62-.14-7,6.46c0,0-.82,4.17,6.23,10.05a1.16,1.16,0,0,0,1.52,0c1.76-1.62,6-6,6-10C21.8,8,17.24,6.77,15.16,6.61Zm.55,14.5a.92.92,0,0,1-1.2,0c-5.53-4.62-4.89-7.9-4.89-7.9.3-5.19,5.5-5.07,5.5-5.07,1.64.12,5.22,1.06,5.28,5.07C20.45,16.42,17.09,19.83,15.71,21.11Z"
                      transform="translate(-8.12 -6.61)"
                    />
                    <circle cx="6.88" cy="6.83" r="1.76" />
                  </svg>
                  <div className="text">
                    <h2>{t("address")}</h2>
                    <h4>{this.props.personalInfo.address}</h4>
                  </div>
                </div>
                <div className="phone">
                  <svg
                    id="phone"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16.81 16.8"
                  >
                    <path
                      d="M23.35,18.65c-.09-1.26-2.8-1.22-4-1.5s-2.14,1.59-2.71,2.09a1.13,1.13,0,0,1-1.14.26A63,63,0,0,1,10.76,15c-.81-1.07-.31-1.38.71-2.23S12.8,11,12.73,9s-.85-2.42-.85-2.42H7.17c-.71,0-.57,1.26-.57,1.26a17.08,17.08,0,0,0,2.93,8.39A15.73,15.73,0,0,0,22.12,23.4C23.52,23.49,23.45,19.9,23.35,18.65Zm-14-6.2A12.72,12.72,0,0,1,8.21,9a.41.41,0,0,1,.35-.49,7.25,7.25,0,0,1,1.15-.09c.84,0,1.27.36,1.28,1.1a3.28,3.28,0,0,1-.8,2.41C9.51,12.62,9.34,12.45,9.34,12.45ZM20.9,21.6a22.27,22.27,0,0,1-3.33-.78c-.2-.39.5-1,1.07-1.46s.43-.38,1-.32,1.81-.09,1.78.34S21.83,21.69,20.9,21.6Z"
                      transform="translate(-6.59 -6.6)"
                    />
                    <path
                      d="M17.67,15.25h1.84s.8-2.64-1.43-3.9-3.3-.91-3.3-.91v1.91s1.45-.22,2,.47A2.75,2.75,0,0,1,17.67,15.25Z"
                      transform="translate(-6.59 -6.6)"
                    />
                    <path
                      d="M21.1,15.25h2.3A8.21,8.21,0,0,0,21,9.07,9.67,9.67,0,0,0,14.78,6.6V8.42s3.23-.07,4.77,2S21.12,12.4,21.1,15.25Z"
                      transform="translate(-6.59 -6.6)"
                    />
                  </svg>
                  <div className="text">
                    <h2>{t("phone")}</h2>
                    <h4>{this.props.personalInfo.phone}</h4>
                  </div>
                </div>
              </div>
              <div className="bottom">
                {this.props.personalInfo.contacts.map((contact) => (
                  <Link
                    to={contact.compotence}
                    target="_blank"
                    key={contact.name}
                    dangerouslySetInnerHTML={{ __html: contact.svg }}
                  ></Link>
                ))}
              </div>
            </div>
            <div className="left">
              <div className="text">
                <h2>{t("contact_me")}</h2>
                <h5>
                  Sosyal medya hesaplarımdan da iletişime geçebilirsiniz. İş ile
                  ilgili görüşmeleri bionluk ({" "}
                  <span>
                    <svg
                      id="bionluk"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.75 16.99"
                    >
                      <path
                        d="M13.27,12.39a6.49,6.49,0,0,0-2.52.75L12.1,6.51H8.26l-2,11.42a11.69,11.69,0,0,0-.16,2v1.24a2,2,0,0,0,1,1.74,6.8,6.8,0,0,0,3.23.62c3.87,0,6.24-1.56,6.3-5.79S16.3,12.33,13.27,12.39Zm-.44,6.49a2.14,2.14,0,0,1-2.38,1.74c-.8,0-.67-.39-.61-2.05a5.73,5.73,0,0,1,.34-2.29,1.29,1.29,0,0,1,.72-.68C12.91,15.13,13.61,16.11,12.83,18.88Z"
                        transform="translate(-6.13 -6.51)"
                      />
                      <path
                        d="M18.11,23.49h3.81l1.29-6.9a5,5,0,0,0,.09-.95V14.2s0-1.65-2.6-1.65-2.86,1.28-2.86,1.28v2.28a.87.87,0,0,1,1.08-.4C19.65,16,18.11,23.49,18.11,23.49Z"
                        transform="translate(-6.13 -6.51)"
                      />
                      <path
                        d="M22.15,6.51a2.44,2.44,0,0,0-2.69,2.55c-.14,3.24,4.41,2,4.41-.46A1.9,1.9,0,0,0,22.15,6.51Z"
                        transform="translate(-6.13 -6.51)"
                      />
                    </svg>
                  </span>{" "}
                  ) üzerinden yapabiliriz.
                </h5>
              </div>
              <form>
                <input type="text" placeholder="Ad-Soyad" />
                <input type="text" placeholder="Email" />
                <textarea placeholder="Mesajınız..."></textarea>
                <button>{t("send")}</button>
              </form>
            </div>
          </div>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    personalInfo: state.getPersonalInfoReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPersonalInfo: bindActionCreators(
        personalActions.getPersonalInfo,
        dispatch
      ),
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Contact));
