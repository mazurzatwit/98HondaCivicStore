import NavigationBar from "./NavigationBar";
import { Routes, Route } from "react-router-dom";
import Product from "./Product";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
      const getData = async function () {
        const response = await fetch("http://localhost:5173/data.json");
        const data = await response.json();
        setData(data);
      };
    getData();
  }, []);

  return (
    <div>
      <h1>1998 Honda Civic Store</h1>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/product" element={<Product {...data}/>} />
        <Route path="/accessories" element={<h1>Accessories</h1>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>
    </div>
  );
}

export default App;
