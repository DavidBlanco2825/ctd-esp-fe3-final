import { useContext } from 'react'
import { Link } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';
import { routes } from "./utils/routes";
import ThemeToggleButton from './ThemeToggleButton'; // Import the new component

const Navbar = () => {
  const { state, changeTheme } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <nav>
      <img className="logo" src="/images/DH.png" alt="DH-logo" />
      <div className="nav-content">
        <div className="nav-links">
          <Link to={routes.home}>
            <h4>Home</h4>
          </Link>
          <Link to={routes.contact}>
            <h4>Contact</h4>
          </Link>
          <Link to={routes.favs}>
            <h4>Favs</h4>
          </Link>
        </div>
        <ThemeToggleButton theme={theme} changeTheme={changeTheme} />
      </div>
    </nav>
  );
};

export default Navbar