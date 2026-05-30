import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";

import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import "./App.css";
import Login from "./pages/Login";
import AddToCart from "./pages/AddToCart";


function App() {  
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />

        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-to-cart" element={<PostDetails />} />
      


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;