import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<h1>Hello React!</h1>);
