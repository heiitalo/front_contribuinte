import { Route, Routes } from "react-router-dom";
import { Contribuintes } from "../pages/Contribuintes";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/contribuintes" element={<Contribuintes />} />
    </Routes>
  );
}
