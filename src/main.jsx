import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { initFireStore } from "./firebase/server";
// import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

//import CSS archive
import "./App.css";
initFireStore();
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
