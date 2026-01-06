import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa6";
import { ContentTitle } from "../components/ContentTilte";
import { Divider } from "../components/Divider";

export const Career = () => {
  const [isOpen0, setIsOpen0] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 6000, once: true });
  }, []);

  return (
    <section className="timeline-section hero-section">
      {/* <div className="inner"> */}
      <ContentTitle
        subTitle="경력 사항"
        title="다양한 업무와 프로젝트를 통해 경험과 노하우를 쌓고 있습니다."
      />
      {/* <div className="content"> */}
      <div className="content timeline-content work_experience">
        <Divider desc="업무 경험" />
        <div className="timeline-list">
          <div className="timeline-item">
            <h5 className="content-title">
              <i className="icon ico-md current">
                <FaStarOfLife />
              </i>
              2024 - 현재
            </h5>
            <div className="content-desc">
              <p className="desc-title">
                <b>
                  캐디안
                  <small>클라우드 플랫폼 팀</small>
                </b>
                <span className="desc-detail">캐드 소프트웨어 개발 솔루션</span>
              </p>
              <ul>
                <li className="icon ico-xl">
                  <FaReact />
                </li>
                <li className="icon ico-xl">
                  <FaReact />
                </li>
                <li className="icon ico-xl">
                  <FaReact />
                </li>
                <li className="icon ico-xl">
                  <FaReact />
                </li>
                <li className="icon ico-xl">
                  <FaReact />
                </li>
              </ul>
              <div className={`detail-block ${isOpen0 ? "is-open" : ""}`}>
                <button
                  className="detail-btn"
                  onClick={() => setIsOpen0(!isOpen0)}
                >
                  <i className="icon ico-xs">
                    <FaChevronRight />
                  </i>
                  주요 업무 내용 보기
                </button>
                <ul className="detail-content">
                  <li className="detail-item">
                    React, Typescript 기반의 Micro Frontend Service 개발 및
                    유지보수
                  </li>
                  <li className="detail-item">
                    React, Typescript 기반의 Micro Frontend Service 개발 및
                    유지보수
                  </li>
                  <li className="detail-item">
                    React, Typescript 기반의 Micro Frontend Service 개발 및
                    유지보수
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <h5 className="content-title">
              <i className="icon ico-md">
                <FaStarOfLife />
              </i>
              2022 - 2023
            </h5>
            <div className="content-desc">
              <p className="desc-title">
                <b>
                  삼안
                  <small>지원본부123</small>
                </b>
                <span className="desc-detail">2025.01 - 2025.02</span>
              </p>
              <ul>
                <li className="icon ico-xl">
                  <FaReact />
                </li>
                <li className="icon ico-xl">
                  <FaReact />
                </li>
                <li className="icon ico-xl">
                  <FaReact />
                </li>
                <li className="icon ico-xl">
                  <FaReact />
                </li>
                <li className="icon ico-xl">
                  <FaReact />
                </li>
              </ul>
              <div className={`detail-block ${isOpen1 ? "is-open" : ""}`}>
                <button
                  className="detail-btn"
                  onClick={() => setIsOpen1(!isOpen1)}
                >
                  <i className="icon ico-xs">
                    <FaChevronRight />
                  </i>
                  주요 업무 내용 보기
                </button>
                <ul className="detail-content">
                  <li className="detail-item">
                    React, Typescript 기반의 Micro Frontend Service 개발 및
                    유지보수
                  </li>
                  <li className="detail-item">
                    React, Typescript 기반의 Micro Frontend Service 개발 및
                    유지보수
                  </li>
                  <li className="detail-item">
                    React, Typescript 기반의 Micro Frontend Service 개발 및
                    유지보수
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};
