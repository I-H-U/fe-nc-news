import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SingleArticle from "./SingleArticle";
import Articles from "./components/Articles";
import { UserProvider } from "./contexts/UserContext";
import Topics from "./components/Topics";
import TopicArticles from "./components/TopicArticles";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topic_slug" element={<TopicArticles />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
