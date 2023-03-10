import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddArticle from "./add/AddArticle";
import AddConference from "./add/AddConference";
import AddJournal from "./add/AddJournal";
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
import Books from "./add/Books";
import Patents from "./add/Patents";
import Citations from "./add/Citations";
import ResearchPublicationCount from "./add/ResearchPublicationCount";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/Journal" element={<Journal />} />
        <Route exact path="/Conference" element={<Conference />} />
        <Route exact path="/Article" element={<Article />} />
        <Route exact path="/Books" element={<Books />} />
        <Route exact path="/Patents" element={<Patents />} />
        <Route exact path="/Citations" element={<Citations />} />
        <Route exact path="/ResearchPublicationCount" element={<ResearchPublicationCount />} />
        
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Login/SignUp" element={<SignUp />} />
        <Route
          exact
          path="/Login/AdminDashboard"
          element={<AdminDashboard />}
        />
        <Route exact path="/Login/AdminJournal" element={<AdminJournal />} />
        <Route
          exact
          path="/Login/AdminConference"
          element={<AdminConference />}
        />
        <Route exact path="/Login/AdminArticle" element={<AdminArticle />} />
        <Route
          exact
          path="/Login/AddResearchPapers"
          element={<AddResearchPapers />}
        />
        <Route
          exact
          path="/Login/AddResearchPapers/AddJournal"
          element={<AddJournal />}
        />
        <Route
          exact
          path="/Login/AddResearchPapers/AddConference"
          element={<AddConference />}
        />
        <Route
          exact
          path="/Login/AddResearchPapers/AddArticle"
          element={<AddArticle />}
        />
      </Routes>
    </Router>
  );
}

export default App;
