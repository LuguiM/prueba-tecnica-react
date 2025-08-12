import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  </StrictMode>
);
