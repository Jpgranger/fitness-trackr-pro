import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Error404 from "./Error404.jsx";
import ActivityDetail from "./activities/ActivityDetail";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ActivitiesPage />} /> {/* This handles "/" */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/activities/:activityId" element={<ActivityDetail />} />
      </Route>
    </Routes>
  );
}