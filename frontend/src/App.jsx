import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import UpcomingIPOPage from "./pages/UpcomingIPOPage/IPOList";
import IpoDetail from "./pages/UpcomingIPOPage/IpoDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UpcomingIPOPage />} />
        <Route path="/ipo-detail" element={<IpoDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
