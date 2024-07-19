import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        
        <li>
          <Link to="/category">category</Link>
        </li>
        <li>
          <Link to="/Subcategory">subcategory</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar