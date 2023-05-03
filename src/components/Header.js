import {NavLink} from 'react-router-dom';
function Header() {
  return (
    <>
      <nav>
        <ul className="navList">
          <li><NavLink to="/">Main</NavLink></li>
          <li><NavLink to="/routing">Routing</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
