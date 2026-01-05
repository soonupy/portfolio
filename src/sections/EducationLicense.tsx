import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa6";
import { ContentTitle } from "../components/ContentTilte";
import { Divider } from "../components/Divider";


export const EducationLicense = () => {
    const [isOpen0, setIsOpen0] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 6000, once: true });
      }, []);
      
    return (
        <section className="timeline-section hero-section">
            {/* <div className="inner"> */}
                <ContentTitle subTitle="학력 및 자격증" title="다양한 업무와 프로젝트를 통해 경험과 노하우를 쌓고 있습니다." />
                <div className="content">
                    <div className="timeline-content education_license">
                        <Divider desc="학력" />
                        <div className="timeline-list mb">
                            <div className="timeline-item">
                                <h5 className="content-title">
                                    <i className="icon ico-md"><FaStarOfLife /></i>
                                    2016 - 2020</h5>
                                <div className="content-desc">
                                    <p className="desc-title">
                                        <b>백제예술대학교
                                        </b>
                                    <span className="desc-detail">
                                        실내디자인과
                                        </span>
                                    </p>

                                </div>
                            </div>
                            <div className="timeline-item">
                                <h5 className="content-title">
                                    <i className="icon ico-md"><FaStarOfLife /></i>
                                    2013 - 2016</h5>
                                <div className="content-desc">
                                    <p className="desc-title">
                                        <b>평촌과학기술고등학교
                                        </b>
                                    <span className="desc-detail">
                                        디지털산업디자인과
                                        </span>
                                    </p>

                                </div>
                            </div>

                        </div>

                        {/* 자격증 */}
                        <Divider desc="자격증" />
                        <div className="timeline-list">
                            <div className="timeline-item">
                                <h5 className="content-title">
                                    <i className="icon ico-md"><FaStarOfLife /></i>
                                    2022.08</h5>
                                <div className="content-desc">
                                    <p className="desc-title">
                                        <b>컴퓨터활용능력
                                        <small>2급</small>
                                        </b>
                                    <span className="desc-detail">
                                        대한상공회의소
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <h5 className="content-title">
                                    <i className="icon ico-md"><FaStarOfLife /></i>
                                    2020.12</h5>
                                <div className="content-desc">
                                    <p className="desc-title">
                                        <b>GTQi 일러스트
                                        <small>1급</small>
                                        </b>
                                    <span className="desc-detail">
                                        한국생산성본부
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <h5 className="content-title">
                                    <i className="icon ico-md"><FaStarOfLife /></i>
                                    2020.11</h5>
                                <div className="content-desc">
                                    <p className="desc-title">
                                        <b>ITQ
                                        </b>
                                    <span className="desc-detail">
                                        한국생산성본부
                                        </span>
                                    </p>
                                    <div className={`detail-block ${isOpen0 ? 'is-open' : ''}`}>
                                        <button className="detail-btn" onClick={() => setIsOpen0(!isOpen0)}>
                                            <i className="icon ico-xs"><FaChevronRight /></i>
                                            자격증 더보기
                                        </button>
                                       <ul className="detail-content">
                                        <li className="detail-item">
                                            엑셀 
                                        </li>
                                        <li className="detail-item">
                                            파워포인트
                                        </li>
                                        <li className="detail-item">
                                            한글
                                        </li>
                                        <li className="detail-item">
                                            인터넷
                                        </li>
                                       </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <h5 className="content-title">
                                    <i className="icon ico-md"><FaStarOfLife /></i>
                                    2020.10</h5>
                                <div className="content-desc">
                                    <p className="desc-title">
                                        <b>디지털정보활용능력
                                        </b>
                                    <span className="desc-detail">
                                    (사)한국정보통신진흥협회
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <h5 className="content-title">
                                    <i className="icon ico-md"><FaStarOfLife /></i>
                                    2020.02</h5>
                                <div className="content-desc">
                                    <p className="desc-title">
                                        <b>GTQ 포토샵
                                            <small>
                                                1급
                                            </small>
                                        </b>
                                    <span className="desc-detail">
                                    한국생산성본부
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <h5 className="content-title">
                                    <i className="icon ico-md"><FaStarOfLife /></i>
                                    2015.07</h5>
                                <div className="content-desc">
                                    <p className="desc-title">
                                        <b>컴퓨터그래픽스운용기능사
                                        </b>
                                    <span className="desc-detail">
                                    한국생산성본부
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </section>
    );
};