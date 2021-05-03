import '../styles/App.css';
import WelcomeNotice from './components/WelcomeNotice.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import Gallery from './pages/Gallery.js';
import Profile from './pages/Profile.js';
import Contact from './pages/Contact.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <WelcomeNotice />
      <Header position="top"/>
      <Main/>
      <Header position="bottom"/>
      <Footer/>
    </Router>
  );
}


const Main = () => {
  return(
    <main className="main">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/gallery/:category" component={Gallery} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  );
};

export default App;