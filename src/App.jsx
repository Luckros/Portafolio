import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import "./styles/index.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
