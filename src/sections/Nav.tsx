// src/Playground.tsx
import { Tooltip } from "react-tooltip";
import { ChevronUp } from "lucide-react";
import { useScrollToTop } from "@hooks/ScrollToTop";

const ScrollToTopbtn = () => {
  const { scrollToTop } = useScrollToTop();
  return (
    <button
      className="nav-control-btn"
      data-tooltip-id="scroll-to-top"
      data-tooltip-content="scroll to top"
      onClick={() => scrollToTop()}
    >
      <i className="icon ico-md">
        <ChevronUp strokeWidth={4} />
      </i>
    </button>
  );
};

export const Navigation = () => {
  return (
    <section className={`navigation-section`}>
      <nav className="list-bar nav-bar">
        <ul className="list nav-list">
          <li className="nav-page-item">
            <input type="radio" id="tech" name="nav-section" value="tech" />
            <label htmlFor="tech">기술</label>
          </li>
          <li className="nav-page-item">
            <input type="radio" id="career" name="nav-section" value="career" />
            <label htmlFor="career">경력</label>
          </li>
          <li className="nav-page-item">
            <input
              type="radio"
              id="project"
              name="nav-section"
              value="project"
            />
            <label htmlFor="project">프로젝트</label>
          </li>
          <li className="nav-page-item">
            <input
              type="radio"
              id="certification"
              name="nav-section"
              value="certification"
            />
            <label htmlFor="certification">자격증</label>
          </li>
        </ul>
        <div className="nav-control">
          {/* <button className="nav-control-btn"> */}
          {/* <i className="icon ico-md"><ChevronUp /></i> */}
          {/* </button> */}
          <ScrollToTopbtn />
          <Tooltip
            id="scroll-to-top"
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "8px",
              padding: "0.5rem 1rem",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          />{" "}
          {/* <button className="nav-control-btn"> */}
          {/* <i className="icon ico-md"><ChevronUp /></i> */}
          {/* </button> */}
        </div>
      </nav>
    </section>
  );
};
