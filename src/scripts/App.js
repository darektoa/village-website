import "../styles/App.css";
import "../sass/main.scss";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Blog from "./pages/Blog.js";
import Profile from "./pages/Profile.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Header className="top" />
      <Main />
      <Header className="bottom" />
      <Footer />
    </Router>
  );
};

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  );
};

export default App;
