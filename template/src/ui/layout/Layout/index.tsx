import {
  Routes,
  Route,
} from "react-router-dom";

// Services
import { getSiteName } from "../../../services";

// Pages
import Home from "../../pages/home";

// Components
import Title from "./components/Title";

const SITE_NAME = getSiteName();

export default function Layout(): JSX.Element {
  return (
    <div className="App">
      <header>
        <Title>
          {SITE_NAME}
          {" "}
          - React Starter Template
        </Title>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
