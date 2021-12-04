import { Provider } from "react-redux";
import {
  HashRouter as Router,
} from "react-router-dom";

// Layout
import Layout from "./layout";

// Redux
import { store } from "../redux/app/store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );
}

export default App;

/**
 * This is the app starting point for development.
 * Please edit this file when you need more initilization.
 */
