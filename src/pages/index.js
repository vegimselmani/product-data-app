import React from 'react';
import { Container } from "@mui/material";
import ProductList from "./components/ProductList";

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/products?page=1&limit=20");
  const products = await response.json();

  return { props: { initialProducts: products }}
}

export default function Home({initialProducts}) {
  
  return (
   <Container maxWidth="xl" component="main" aria-label="Main product listing">
    <ProductList initialProducts={initialProducts}/>
   </Container>
  );
}
