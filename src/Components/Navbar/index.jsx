import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/tabletop">Tabletop</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
