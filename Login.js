import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [message, setMessage] = useState("");
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }; 
  const handleSubmit = (e) => {
    e.preventDefault();

 
    const correctUsername = "shubikshan";
    const correctPassword = "12345";

    if (
      formData.username === correctUsername &&
      formData.password === correctPassword
    ) {

      localStorage.setItem("isLoggedIn", true);

      setMessage("Login Successful");

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } else {

      setMessage("Invalid Username or Password");
    }
  };

  return (

    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >

        <h2>Login and enjoy our services</h2>

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

        <p className="message">
          {message}
        </p>

      </form>

    </div>
  );
}

export default Login;