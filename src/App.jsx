import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "./components/navbar";
import SimpleSlider from "./components/banner";
import Product from "./ProductsData/product";
import Topsale from "./components/topsale";
import BottomSlider from "./components/bannerbottom";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data'); 
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Ma\'lumotlarni olishda xatolik:', error);
    }
  };

  return (
    <div className="bg-bodycolor">
      <Navbar />
      <SimpleSlider />
      <Product data={data} /> 
      <Topsale />
      <BottomSlider />
    </div>
  );
};

export default App;
