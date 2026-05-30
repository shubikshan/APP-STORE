import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductsDetails.css";

function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)

      .then((res) => res.json())
      
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div>

      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <h2>{product.title}</h2>

      <img src={product.image} alt={product.title} width="300" />

      <p>{product.description}</p>

      <h3>${product.price}</h3>

    </div>
  );
}

export default ProductDetails;