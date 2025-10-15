import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Menu1Page from "./pages/Menu1Page";
import Menu2Page from "./pages/Menu2Page";
import Menu3Page from "./pages/Menu3Page";
import Menu4Page from "./pages/Menu4Page";
import "@styles/index.scss";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Layout>
        <Routes>
          <Route path="/menu1" element={<Menu1Page />} />
          <Route path="/menu2" element={<Menu2Page />} />
          <Route path="/menu3" element={<Menu3Page />} />
          <Route path="/menu4" element={<Menu4Page />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
