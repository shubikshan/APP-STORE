import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>React API App</h1>

      <nav>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        <Link to="/add-to-cart">Add to Cart </Link>
      </nav>
    </header>
  );
}

export default Header;