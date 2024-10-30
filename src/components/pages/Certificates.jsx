import React, { Component } from "react";

export default class Certificates extends Component {
  render() {
    return (
      <div className="certificates-s">
        <div className="filter-links">
          <a id="certificate" className="link active">
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
          <a id="nasa" className="link">
            <h6>NASA</h6>
            <span className="underline"></span>
          </a>
          <a id="cs" className="link">
            <h6>C#</h6>
            <span className="underline"></span>
          </a>
          <a id="iletisim" className="link">
            <h6>İletişim</h6>
            <span className="underline"></span>
          </a>
        </div>

        <div className="certificates">
          <div className="certificate-box active nasa-box">
            <a
              href="https://lean-sleep-c78.notion.site/Nasa-Space-Apps-Challenge-2022-0a07177b57c04edf8e841208c41f512f"
              target="_blank"
            >
              <div className="img">
                <img src="/img/certificates/nasaSpaceApps2022.png" />
              </div>
              <div className="hover dark">
                Nasa Space Apps 2022 Elazığ Birinciliği
              </div>
            </a>
          </div>
          <div className="certificate-box active web-programlama-box">
            <a
              href="https://lean-sleep-c78.notion.site/Web-Programlama-c002f29e94e442049cfe88e19e56d788"
              target="_blank"
            >
              <div className="img">
                <img src="/img/certificates/webProgramlama.png" />
              </div>
              <div className="hover">Web Programlama</div>
            </a>
          </div>
          <div className="certificate-box active web-programlama-box">
            <a
              href="https://lean-sleep-c78.notion.site/HTML5-ile-Web-Geli-tirme-96c43af5a8c2457caea4c2dbb6b5005d"
              target="_blank"
            >
              <div className="img">
                <img src="/img/certificates/HTML5ileWenGelistirme.png" />
              </div>
              <div className="hover">HTML5 ile Web Geliştirme</div>
            </a>
          </div>
          <div className="certificate-box active web-programlama-box">
            <a
              href="https://lean-sleep-c78.notion.site/Web-Sitesi-Kullanabilirli-i-9eed277585474660be78c304ecbf2c0d"
              target="_blank"
            >
              <div className="img">
                <img src="/img/certificates/WebSitesiKullanabilirligi.png" />
              </div>
              <div className="hover">Web Sitesi Kullanabilirliği</div>
            </a>
          </div>
          <div className="certificate-box active web-programlama-box">
            <a
              href="https://lean-sleep-c78.notion.site/CSS-Temelleri-06f98b20ee164003b0ecc9e4c1c1aa69"
              target="_blank"
            >
              <div className="img">
                <img src="/img/certificates/cssTemelleri.png" />
              </div>
              <div className="hover">CSS Temelleri</div>
            </a>
          </div>
          <div className="certificate-box active cs-box">
            <a
              href="https://lean-sleep-c78.notion.site/C-ile-Algoritma-ve-Programlama-808d0397378c4c919657cb78e1b324e4"
              target="_blank"
            >
              <div className="img">
                <img src="/img/certificates/csIleAlgoritmaVeProgramlama.png" />
              </div>
              <div className="hover">C# ile Algoritma ve Programlama</div>
            </a>
          </div>
          <div className="certificate-box active cs-box">
            <a
              href="https://lean-sleep-c78.notion.site/C-Form-ile-G-rsel-ve-Nesne-Tabanl-Programlama-ad9a7695bc0f4ab3bd6fc7a730329052"
              target="_blank"
            >
              <div className="img">
                <img src="/img/certificates/csFormileGorselProgramlama.png" />
              </div>
              <div className="hover">
                C# Form ile Görsel ve Nesne Tabanlı Programlama
              </div>
            </a>
          </div>
          <div className="certificate-box active iletisim-box">
            <a
              href="https://lean-sleep-c78.notion.site/Etkili-leti-im-Stratejileri-d0f854bd2f25445f9b11d6d8396745b6"
              target="_blank"
            >
              <div className="img">
                <img src="/img/certificates/EtkiliIletisimStratejileri.png" />
              </div>
              <div className="hover">Etkili İletişim Stratejileri</div>
            </a>
          </div>
          <div className="certificate-box active oyun-programlama-box">
            <a
              href="https://lean-sleep-c78.notion.site/Unity-C-1d064c8478764d78aefffa1d2a4e009e?pvs=4"
              target="_blank"
            >
              <div className="img">
                <img src="/img/certificates/unityCSharp.jpg" />
              </div>
              <div className="hover">Unity C#</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
