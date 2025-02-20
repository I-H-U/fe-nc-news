import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SingleArticle from "./SingleArticle";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
