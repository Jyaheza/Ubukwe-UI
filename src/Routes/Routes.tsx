import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/authentication/Login.tsx";
import SignUpPage from "../features/authentication/Signup.tsx";
import PlanningStep1 from "../planning/planning_1.tsx";
import PlanningStep2 from "../planning/planning_2.tsx";
import PlanningStep3 from "../planning/planning_3.tsx";
import PlanningStep4 from "../planning/plannning_4.tsx";
import PlanningStep4a from "../planning/planning_4a.tsx";
import PlanningStep5 from "../planning/planning_5.tsx";
import PlanningFinal from "../planning/planning_final.tsx";
import WeddingDashboard from "../dashboard/dashboard.tsx";
import VendorDetails from "../shared/VendorDetail.tsx";
// import ForgotPassword from "../Pages/ForgotPassword";

const routes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
      <Route path="/planning1" element={<PlanningStep1 />} />
      <Route path="/planning2" element={<PlanningStep2 />} />
      <Route path="/planning3" element={<PlanningStep3 />} />
      <Route path="/planning4" element={<PlanningStep4 />} />
      <Route path="/planning4a" element={<PlanningStep4a />} />
      <Route path="/planning5" element={<PlanningStep5 />} />
      <Route path="/planningFinal" element={<PlanningFinal/>} />
      <Route path="/dashboard" element={<WeddingDashboard/>} />
      <Route path="/vendorDetail" element={<VendorDetails/>} />



    </Routes>
  );
};

export default routes;
