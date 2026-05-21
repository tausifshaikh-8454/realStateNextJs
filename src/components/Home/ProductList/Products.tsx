"use client";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
       
        const res = await fetch("https://www.seabulkint.com/wp-json/wp/v2/posts");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    
    getProduct();
    
  }, []);

  return (
   
    console.log(products)
    
  );
}