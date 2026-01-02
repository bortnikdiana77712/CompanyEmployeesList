import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EmployeesProvider } from './context/provider/EmployeesProvider.js'
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmployeesProvider>
      <App />
    </EmployeesProvider>
  </StrictMode>
);
