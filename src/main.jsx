import ReactDOM from "react-dom/client";
import EncuentroProvider from "./context/EncuentroProvider.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <EncuentroProvider>
    <App />
  </EncuentroProvider>
);
