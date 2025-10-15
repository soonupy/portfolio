import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Layout from "./components/Layout";
import "@styles/index.scss";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Layout>
        <Routes>
          {/* 루트 경로 추가 - 빈 컴포넌트 또는 리다이렉트 */}
          <Route path="/" element={<></>} />  {/* ← 추가! */}

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
