import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import UpcomingIPOPage from "./pages/UpcomingIPOPage/IPOList";
import IpoDetail from "./pages/UpcomingIPOPage/IpoDetail";
import LoginPage from "./pages/AuthPages/SignInPage";
import SignupPage from "./pages/AuthPages/SignUpPage";
import ForgotPasswordPage from "./pages/AuthPages/ForgetPasswordPage";
import AdminDashboard from "./pages/AdminPages/AdminDashBoard";
import ManageIPO from "./pages/AdminPages/ManageIPO";
import RegisterIPO from "./pages/AdminPages/RegisterIPO";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UpcomingIPOPage />} />
        <Route path="/ipo-detail" element={<IpoDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Admin layout route with nested children */}
        <Route path="/dashboard" element={<AdminDashboard />}>
          <Route index element={<div>Welcome to the Dashboard</div>} />
          <Route path="manage-ipo" element={<ManageIPO />} />
          <Route path="register-ipo" element={<RegisterIPO />} />
          {/* <Route path="ipo-subscription" element={<IPOSubscription />} />
          <Route path="ipo-allotment" element={<IPOAllotment />} />
          <Route path="settings" element={<Settings />} />
          <Route path="api-manager" element={<APIManager />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="help" element={<Help />} /> */}
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
