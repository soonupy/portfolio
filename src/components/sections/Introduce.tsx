import { Fa0, Fa1, Fa2 } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";


export const Introduce = () => { 

    return (
      <section className="introduce-section">
        <div className="content">
          <div className="logo-block">
            <i className="icon"><Fa0 /></i>
            <i className="icon"><Fa1 /></i>
            <i className="icon"><Fa2 /></i>
          </div>
          <div className="title-block">
            <strong className="title">안녕하세요.
              <br />
              {/* 웹 퍼블리셔 */}
              웹 프론트엔드
              <br />
              <span className="name">권순우</span>입니다.
            </strong>
          </div>
          <p className="introduce-desc">React를 중심으로 웹 프론트엔드를 개발합니다.
            <br />
          함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.</p>

          <button className="resume-download-btn">
            이력서 다운로드
            <i className="icon ico-md"><LuDownload /></i>
          </button>
        </div>
      </section>
    );
  };