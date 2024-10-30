import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-s">
        <div className="filter-links">
          <a id="project" className="link active">
            <h6>Tümü</h6>
            <span className="underline"></span>
          </a>
          <a id="web-programlama" className="link">
            <h6>Web Programlama</h6>
            <span className="underline"></span>
          </a>
          <a id="oyun-programlama" className="link">
            <h6>Oyun Programlama</h6>
            <span className="underline"></span>
          </a>
        </div>
        <div className="projects-modals">
          <div className="projects">
            <div
              id="urla-ciftlik"
              className="project-box active web-programlama-box"
            >
              <a>
                <div className="img">
                  <img src="../img/freelancer/urlaCiftlik.png" />
                </div>
                <div className="hover">Urla Çiftlik</div>
              </a>
            </div>
            <div
              id="freelancerClone"
              className="project-box active web-programlama-box"
            >
              <a>
                <div className="img">
                  <img src="../img/freelancer/freelancerClone.png" />
                </div>
                <div className="hover dark">Freelancer Klon</div>
              </a>
            </div>
            <div
              id="fresh-coffee"
              className="project-box active web-programlama-box"
            >
              <a>
                <div className="img">
                  <img src="../img/freelancer/freshCoffee.png" />
                </div>
                <div className="hover">Fresh Coffee</div>
              </a>
            </div>
            <div
              id="wpClone"
              className="project-box active web-programlama-box"
            >
              <a>
                <div className="img">
                  <img src="../img/freelancer/wpClone.png" />
                </div>
                <div className="hover dark">WhatsApp Web Klon</div>
              </a>
            </div>
            <div id="aek-v1" className="project-box active web-programlama-box">
              <a>
                <div className="img">
                  <img src="../img/freelancer/aek-v1.png" />
                </div>
                <div className="hover">AEK V1</div>
              </a>
            </div>
            <div
              id="lokumGames"
              className="project-box active web-programlama-box"
            >
              <a>
                <div className="img">
                  <img src="../img/freelancer/lokumGames.png" />
                </div>
                <div className="hover dark">Lokum Games</div>
              </a>
            </div>
            <div
              id="monologue"
              className="project-box active web-programlama-box"
            >
              <a>
                <div className="img">
                  <img src="../img/freelancer/monologue.png" />
                </div>
                <div className="hover dark">Monologue</div>
              </a>
            </div>
            <div id="rForm" className="project-box active web-programlama-box">
              <a>
                <div className="img">
                  <img src="../img/freelancer/rform.png" />
                </div>
                <div className="hover">R-Form Mimarlık</div>
              </a>
            </div>
            <div
              id="fpsGame"
              className="project-box active oyun-programlama-box"
            >
              <a>
                <div className="img">
                  <img src="../img/game/fpsGame.png" />
                </div>
                <div className="hover">FPS Game</div>
              </a>
            </div>
            <div
              id="santasmak"
              className="project-box active web-programlama-box"
            >
              <a>
                <div className="img">
                  <img src="../img/freelancer/santasmak.png" />
                </div>
                <div className="hover dark">Santaş Makina Sanayi</div>
              </a>
            </div>
            <div
              id="zombieGame"
              className="project-box active oyun-programlama-box"
            >
              <a>
                <div className="img">
                  <img src="../img/game/zombieGame.png" />
                </div>
                <div className="hover dark">Zombie Game</div>
              </a>
            </div>
            <div
              id="brickBreakerGame"
              className="project-box active oyun-programlama-box"
            >
              <a>
                <div className="img">
                  <img src="../img/game/brickBreakerGame.png" />
                </div>
                <div className="hover">Tuğla Kırma Oyunu</div>
              </a>
            </div>
            <div
              id="animalsMergeGame"
              className="project-box active oyun-programlama-box"
            >
              <a>
                <div className="img">
                  <img src="../img/game/animalsMerge.png" />
                </div>
                <div className="hover">Animals Merge</div>
              </a>
            </div>
          </div>

          <div className="modals">
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
            <div id="urla-ciftlik-modal" className="modal">
              <div className="img">
                <img src="../img/freelancer/urlaCiftlik.png" />
              </div>
              <div className="content">
                <div className="hood">
                  <h2>
                    Urla <span>Çiftlik</span>
                  </h2>
                  <span className="underline"></span>
                </div>
                <div className="substance">
                  <h4>
                    Proje Tipi: <span>Freelancer İş</span>
                  </h4>
                  <h4>
                    Teslim Tarihi: <span>2020</span>
                  </h4>
                  <h4>
                    Kullanılan Diller ve Teknolojiler:{" "}
                    <span>HTML, CSS, JS</span>
                  </h4>
                  <h4>
                    Açıklama:
                    <span>
                      Freelance sitelerden alınan bu işte tasarım PDF olarak
                      verildi. Ben de bir{" "}
                      <a href="https://bionluk.com/oguzdark" target="_blank">
                        arkadaşımla
                      </a>{" "}
                      birlikte front-end kodlamasını gerçekleştirdik.
                    </span>
                  </h4>
                </div>
                <div className="btns">
                  <a className="close-modal">
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
                    </span>{" "}
                    Kapat
                  </a>
                  <a href="http://www.urlaciftlik.com/" target="_blank">
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
