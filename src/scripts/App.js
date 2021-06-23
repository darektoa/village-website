import '../styles/App.css';
import WelcomeNotice from './components/WelcomeNotice.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import BlogDetail from './pages/BlogDetail.js';
import Citizen from './pages/Citizen.js';
import Gallery from './pages/Gallery.js';
import GalleryDetail from './pages/GalleryDetail.js';
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
        <Route path="/blog" exact component={Blog}/>
        <Route path="/blog/:idBlog" exact component={BlogDetail}/>
        <Route path="/citizen" exact component={Citizen} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/gallery/:idAlbum" component={GalleryDetail} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </main>
  );
};

export default App;