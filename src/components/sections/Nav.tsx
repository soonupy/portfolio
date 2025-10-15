// src/Playground.tsx
import { ChevronUp, ChevronDown } from 'lucide-react';

export const Navigation = () => { 

  return (
    <section className={`navigation-section`}>
      <nav className="navigation-bar">
        <div className="nav-control">
          <button className="nav-control-button up-btn">
            <i className="icon ico-md"><ChevronUp /></i>
          </button>
          <button className="nav-control-button down-btn">
            <i className="icon ico-md"><ChevronDown /></i>
          </button>
        </div>
        <ul className="nav-pages">
          <li className="nav-page-item">
            기술
          </li>
          <li className="nav-page-item">
            경력
          </li>
          <li className="nav-page-item">
            프로젝트
            </li>
          <li className="nav-page-item">
            자격증
          </li>
        </ul>
        </nav>

    </section>
  );
};


