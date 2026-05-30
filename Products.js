import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">

            <img src={product.image} alt={product.title} width="100" />

            <h3>{product.title}</h3>

            <p>${product.price}</p>

            <Link to={`/products/${product.id}`}>
              View Details
            </Link>&&

             <Link to={`/products/${product.id}`}>
              Add to Cart
              </Link>  && 

              <Link to={`/products/${product.id}`}>
              delete
              </Link>&&
              
              <Link to={`/products/${product.id}`}>
              edit
              </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;