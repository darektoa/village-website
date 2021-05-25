import '../../styles/components/Header.css';
import StringHelper from '../utils/string-helper.js';
import navlinkData from '../data/navlink-data.js';
import { NavLink, useLocation } from 'react-router-dom';
import { useHeaderBackground, useWindowInnerWidth, useWindowScroll } from '../utils/custom-hooks.js'
import { useState, useEffect, useLayoutEffect } from 'react';
import GeneralData from '../data/GeneralData.js';

const Header = (props) => {
  const { yScroll }               = useWindowScroll();
  const { pathname }              = useLocation();
  const { position }              = props;
  const [navOpened, setNavOpened] = useState(false);
  const [sticked, setSticked]     = useState(false);
  const [title, setTitle]         = useState('Village Website');
  const innerWidth                = useWindowInnerWidth();
  const positionClass             = useHeaderBackground(position);
  const stickedClass              = sticked ? 'sticked' : '';
  const navActived                = navOpened ? 'active' : '';
  const headerClassName           = StringHelper.join(' ', 'header', position, positionClass, stickedClass, navActived);
  const iconMenuClassName         = StringHelper.join(' ', 'icon_custom icon-menu', navActived);

  useLayoutEffect(() => {
    GeneralData.getAll()
    .then(data => setTitle(data.name));
  });
  
  useEffect(() => {
    setNavOpened(false);
  }, [pathname, innerWidth]);

  useEffect(() => {
    const bodyElmnt = document.body;
    if (navOpened) bodyElmnt.classList.add('hidden')
    else bodyElmnt.classList.remove('hidden');
  }, [navOpened]);

  useEffect(() => {
    if (yScroll > 20 && position === 'top') setSticked(true);
    else setSticked(false);
  }, [yScroll, position]);

  return(
    <header className={headerClassName}>
      <div className="container">
        <h1>{title}</h1>
        <i className={iconMenuClassName} onClick={() => setNavOpened(!navOpened)}></i>
        <nav className={navOpened ? "show" : ""}>
          <NavLinkLoop data={navlinkData}/>
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