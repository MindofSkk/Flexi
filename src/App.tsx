import "./App.css";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import AppRoutes from "./Routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS (includes Popper.js)

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
