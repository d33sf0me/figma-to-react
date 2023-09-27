import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomePageComputer } from "./screens/HomePageComputer";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomePageComputer />);