import { 
    FaReact, 
    FaHtml5, 
    FaCss3Alt, 
    FaJs, 
    FaNodeJs, 
    FaGitAlt, 
    FaGithub, 
    FaFigma, 
    FaDocker, 
    FaAws,
    FaPython
} from "react-icons/fa";
import { 
    SiTypescript, 
    SiNextdotjs, 
    SiTailwindcss, 
    SiSass, 
    SiMongodb, 
    SiMysql, 
    SiPostgresql,
    SiVercel,
    SiNetlify
} from "react-icons/si";
import { ContentTitle } from "../components/ContentTilte";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const StackTool = () => {

    useEffect(() => {
        AOS.init({ duration: 6000, once: true });
      }, []);

    const techStack = [
        { icon: FaHtml5, category: 'frontend' },
        { icon: FaCss3Alt, category: 'frontend' },
        { icon: FaJs, category: 'frontend' },
        { icon: SiTypescript, category: 'frontend' },
        { icon: FaReact, category: 'frontend' },
        { icon: SiNextdotjs, category: 'frontend' },
        { icon: SiTailwindcss, category: 'frontend' },
        { icon: SiSass, category: 'frontend' },
        { icon: FaNodeJs, category: 'library' },
        { icon: SiMongodb, category: 'library' },
        { icon: SiMysql, category: 'library' },
        { icon: SiPostgresql, category: 'library' },
        { icon: FaPython, category: 'library' },
        { icon: FaGitAlt, category: 'deployment' },
        { icon: FaGithub, category: 'deployment' },
        { icon: SiVercel, category: 'deployment' },
        { icon: SiNetlify, category: 'deployment' },
        { icon: FaDocker, category: 'deployment' },
        { icon: FaAws, category: 'deployment' },
        { icon: FaFigma, category: 'design' }
    ];

    return (
        <section className="stack-tool-section hero-section">
                <div className="inner"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="400" >
                    <ContentTitle subTitle="기술 스택 및 도구" title="아래의 기술을 사용할 수 있습니다." />
                    <div className="list-bar tool-bar">
                        <ul className="list tool-list">
                            {/* <li>
                                <input type="radio" id="all" name="tool-category" value="all" />
                                <label htmlFor="all">all</label>
                            </li> */}
                            <li>
                                <input type="radio" id="frontend" name="tool-category" value="frontend" />
                                <label htmlFor="frontend">프론트엔드</label>
                            </li>
                            <li>
                                <input type="radio" id="library" name="tool-category" value="library" />
                                <label htmlFor="library">라이브러리</label>
                            </li>
                            <li>
                                <input type="radio" id="deployment" name="tool-category" value="deployment" />
                                <label htmlFor="deployment">환경 및 배포</label>
                            </li>
                            <li>
                                <input type="radio" id="design" name="tool-category" value="design" />
                                <label htmlFor="design">디자인</label>
                            </li>
                        </ul>
                    </div>
                    <div className="content">
                        <ul className="lang-list">
                            {techStack.map((tech, index) => (
                                <li key={index} className="ability-item" data-category={tech.category}>
                                    <i className="icon ico-4xl"><tech.icon /></i>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
        </section>
    );
};