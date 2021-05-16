import '../../styles/components/Header.css';
import StringHelper from '../utils/string-helper.js';
import navlinksData from '../data/navlinks-data.js';
import { NavLink, useLocation } from 'react-router-dom';
import { useHeaderBackground, useWindowInnerWidth } from '../utils/custom-hooks.js'
import { useState, useEffect } from 'react';

const Header = (props) => {
  const { pathname }              = useLocation();
  const { position }              = props;
  const [navOpened, setNavOpened] = useState(false);
  const innerWidth                = useWindowInnerWidth();
  const bgColor                   = useHeaderBackground(position);
  const navActived                = navOpened ? 'active' : '';
  const headerClassName           = StringHelper.join(' ', 'header', position, bgColor);
  const iconMenuClassName         = StringHelper.join(' ', 'icon_custom icon-menu', navActived);
  
  useEffect(() => {
    setNavOpened(false);
  }, [pathname, innerWidth]);

  useEffect(() => {
    const bodyElmnt = document.body;
    if (navOpened) bodyElmnt.classList.add('hidden')
    else bodyElmnt.classList.remove('hidden');
  }, [navOpened]);

  return(
    <header className={headerClassName}>
      <div className="container">
        <h1>Kampung Cireundeu</h1>
        <i className={iconMenuClassName} onClick={() => setNavOpened(!navOpened)}></i>
        <nav className={navOpened ? "show" : ""}>
          <NavLinkLoop data={navlinksData}/>
        </nav>
      </div>
    </header>
  );
};


const NavLinkLoop = (props) => {
  const { data } = props;
  const navlinks = data.map((item, index) => (
    <li key={index}>
      <NavLink className="link" to={item.to} exact={item.exact}>
        {item.content}
      </NavLink>
    </li>
  ));

  return <ul>{navlinks}</ul>;
};

export default Header;