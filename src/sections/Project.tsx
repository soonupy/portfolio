import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { ContentTitle } from "../components/ContentTilte";


export const Project = () => {
    const [isOpen0, setIsOpen0] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 6000, once: true });
      }, []);
      
    return (
        <section className="project-section hero-section">
                <ContentTitle subTitle="프로젝트 경험" title="프로젝트를 통해 경험과 노하우를 쌓고 있습니다." />
                <div className="content">
                    <div className="project-content project_experience">
                        <ul className="project-list">
                            <li className="list-item">
                                <i className="icon ico-3xl content-icon"><FaReact /></i>
                                <h5 className="content-title">CADian WebCAD</h5>
                                <p className="content-desc">Saas 기반 웹 캐드</p>
                                <div className="stack-list">
                                    <i className="icon ico-xl"><FaReact /></i>
                                    <i className="icon ico-xl"><FaReact /></i>
                                </div>
                            </li>
                            <li className="list-item">
                                <i className="icon ico-3xl content-icon"><FaReact /></i>
                                <h5 className="content-title">CADian WebCAD</h5>
                                <p className="content-desc">Saas 기반 웹 캐드</p>
                                <div className="stack-list">
                                    <i className="icon ico-xl"><FaReact /></i>
                                    <i className="icon ico-xl"><FaReact /></i>
                                </div>
                            </li>
                            <li className="list-item">
                                <i className="icon ico-3xl content-icon"><FaReact /></i>
                                <h5 className="content-title">CADian WebCAD</h5>
                                <p className="content-desc">Saas 기반 웹 캐드</p>
                                <div className="stack-list">
                                    <i className="icon ico-xl"><FaReact /></i>
                                    <i className="icon ico-xl"><FaReact /></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        </section>
    );
};