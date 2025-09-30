import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const RestContext = createContext();

export default function Context({ children }) {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
    const [imagaData, setImageData] = useState([]);

  const fetchApi = async () => {
    try {
      const res = await axios.get("https://swiggy-backend-soko.onrender.com/top-restaurant-chains");
      setData(res.data); 
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };
  const fetchData = async () => {
    try {
      const res = await axios.get("https://swiggy-backend-soko.onrender.com/top-restaurant-data");
      setImageData(res.data); 
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };
  const fetchImag = async () => {
    try {
      const res = await axios.get("https://swiggy-backend-soko.onrender.com/categories");
      setCategories(res.data); 
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  useEffect(() => {
    fetchApi();
    fetchImag();
    fetchData();
  }, []);

  return (
    <RestContext.Provider value={{ data, categories,imagaData }}>
      {children}
    </RestContext.Provider>
  );
}
