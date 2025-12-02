import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";


export const Career = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        AOS.init({ duration: 6000, once: true });
      }, []);
      
    return (
        <section className="career-section hero-section">
            <div className="inner">
                <div className="title-block" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                    <span className="sub-title">경력 사항</span>
                    <h4 className="title">다양한 업무와 프로젝트를 통해
                    경험과 노하우를 쌓고 있습니다.</h4>
                </div>
                <div className="content">
                    <div className="career-content work_experience">
                        <div className="divider">
                            <span></span>
                            <p>업무 경험</p>
                            <span></span>
                        </div>
                        <div className="career-list">
                            <div className="career-content">
                                <h5 className="content-title">업무 경험</h5>
                                <div className="content-desc">
                                    <p className="desc-title">
                                        <b>비상 교육</b>
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
                                    <div className={`detail-block ${openIndex === 0 ? 'is-open' : ''}`}>
                                        <button className="detail-btn" onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}>
                                            <i className="icon ico-sm"><FaChevronRight /></i>
                                            주요 업무 내용 보기
                                        </button>
                                       <ul className="detail-content">
                                        <li className="detail-item">
                                            React, Typescript 기반의 Micro Frontend Service 개발 및 유지보수
                                        </li>
                                        <li className="detail-item">
                                            React, Typescript 기반의 Micro Frontend Service 개발 및 유지보수
                                        </li>
                                        <li className="detail-item">
                                            React, Typescript 기반의 Micro Frontend Service 개발 및 유지보수
                                        </li>
                                       </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="career-content">
                                <h5 className="content-title">업무 경험</h5>
                                <div className="content-desc">
                                    <p className="desc-title">
                                        <b>비상 교육</b>
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
                                    <div className={`detail-block ${openIndex === 1 ? 'is-open' : ''}`}>
                                        <button className="detail-btn" onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}>
                                            <i className="icon ico-sm"><FaChevronRight /></i>
                                            주요 업무 내용 보기
                                        </button>
                                       <ul className="detail-content">
                                        <li className="detail-item">
                                            React, Typescript 기반의 Micro Frontend Service 개발 및 유지보수
                                        </li>
                                        <li className="detail-item">
                                            React, Typescript 기반의 Micro Frontend Service 개발 및 유지보수
                                        </li>
                                        <li className="detail-item">
                                            React, Typescript 기반의 Micro Frontend Service 개발 및 유지보수
                                        </li>
                                       </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};