import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add_article from "./add/AddArticle";
import AddResearchPapers from "./add/AddReasearchPapers";
import AdminArticle from "./add/AdminArticle";
import AdminConference from "./add/AdminConference";
import AdminDashboard from "./add/AdminDashboard";
import AdminJournal from "./add/AdminJournal";
import Article from "./add/Article";
import Conference from "./add/Conference";
import Dashboard from "./add/Dashboard";
import Journal from "./add/Journal";
import Login from "./add/Login";
import SignUp from "./add/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AdminJournal />} />
      </Routes>
    </Router>
  );
}

export default App;
