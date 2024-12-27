import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContexProvider } from "./store/auth-contex";

ReactDOM.render(
  <AuthContexProvider>
    <App />
  </AuthContexProvider>,
  document.getElementById("root")
);
