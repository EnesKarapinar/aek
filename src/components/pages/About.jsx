import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="personel-info">
          <div className="hood">
            <h2>
              Kişisel <span>Bilgiler</span>
            </h2>
            <span className="underline"></span>
          </div>
          <div className="content">
            <div className="right">
              <div className="top">
                <div className="name-lastname">
                  <h4>
                    İsim: <span>Abdullah Enes</span>
                  </h4>
                  <h4>
                    Soyisim: <span>KARAPINAR</span>
                  </h4>
                </div>
                <div className="birthday-country">
                  <h4>
                    Doğum Yılı: <span>2002</span>
                  </h4>
                  <h4>
                    Ülke: <span>Türkiye</span>
                  </h4>
                </div>
              </div>
              <div className="bottom">
                <h4>
                  Dil: <span>Türkçe</span>
                </h4>
                <h4>
                  Email Adresi: <span>karapinarabdullahenes@gmail.com</span>
                </h4>
                <h4>
                  Sosyal Medya Hesaplarım:
                  <span>
                    <a href="https://bionluk.com/eneskarapinar" target="_blank">
                      Bionluk,{" "}
                    </a>
                    <a href="https://www.linkedin.com/in/aekk/" target="_blank">
                      Linkedin,{" "}
                    </a>
                    <a href="https://github.com/EnesKarapinar" target="_blank">
                      Github,{" "}
                    </a>
                    <a
                      href="https://www.instagram.com/a.eneskarapinar/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </span>
                </h4>
              </div>
            </div>
            <div className="left">
              <div className="top">
                <div className="experience">
                  <h4>İş Deneyimi: </h4>
                  <h5>
                    - <span>+</span>
                  </h5>
                </div>
                <div className="project">
                  <h4>Tamamlanan Projeler: </h4>
                  <h5>
                    13 <span>+</span>
                  </h5>
                </div>
              </div>
              <div className="bottom">
                <a href="../img/cv/Abdullah_Enes_Karapinar_CV.pdf" download>
                  CV İndir
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="hood">
            <h2>Yetenekler</h2>
            <span className="underline"></span>
          </div>
          <div className="content">
            <div className="skill html">
              <div className="top">
                <h5>HTML</h5>
                <h6>%90</h6>
              </div>
              <div className="bottom">
                <span className="circle"></span>
                <span className="background"></span>
                <span className="border"></span>
              </div>
            </div>
            <div className="skill css">
              <div className="top">
                <h5>CSS</h5>
                <h6>%95</h6>
              </div>
              <div className="bottom">
                <span className="circle"></span>
                <span className="background"></span>
                <span className="border"></span>
              </div>
            </div>
            <div className="skill scss">
              <div className="top">
                <h5>SCSS</h5>
                <h6>%80</h6>
              </div>
              <div className="bottom">
                <span className="circle"></span>
                <span className="background"></span>
                <span className="border"></span>
              </div>
            </div>
            <div className="skill js">
              <div className="top">
                <h5>JS</h5>
                <h6>%50</h6>
              </div>
              <div className="bottom">
                <span className="circle"></span>
                <span className="background"></span>
                <span className="border"></span>
              </div>
            </div>
            <div className="skill jquery">
              <div className="top">
                <h5>JQUERY</h5>
                <h6>%50</h6>
              </div>
              <div className="bottom">
                <span className="circle"></span>
                <span className="background"></span>
                <span className="border"></span>
              </div>
            </div>
            <div className="skill vue">
              <div className="top">
                <h5>VUE</h5>
                <h6>%20</h6>
              </div>
              <div className="bottom">
                <span className="circle"></span>
                <span className="background"></span>
                <span className="border"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
