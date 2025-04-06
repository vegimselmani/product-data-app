import React, { Fragment, useState, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./ProductCard";
import styles from "../../styles/Home.module.css";
import { Grid, TextField, MenuItem, Select, FormControl, InputLabel, ListSubheader, Alert } from "@mui/material";
import axios from "axios";

function MyListSubheader(props) {
  return <ListSubheader {...props} />;
}

export default function ProductList({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [brand, setBrand] = useState("");
  const [gender, setGender] = useState("");
  const [sizes, setSizes] = useState("")

  const filteredProducts = useMemo(() => {
      return products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (brand ? product.brand === brand : true) &&
        (gender ? product.gender === gender : true) &&
        (sizes ? product.sizes === sizes : true)
      );
    }, [products, searchTerm, brand, gender, sizes]);

  const fetchMoreProducts = async () => {
    try {
      const res = await axios.get("/api/products", {
        params: { page: page + 1, limit: 20 },
      });

      if (res.data.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prev) => [...prev, ...res.data]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Failed to load more products. Please try again later.");
    }
  };

  return (
   <Fragment>
    <Grid container spacing={2} className={styles.filtersContainer}>
    <Grid size={3}>
       <TextField
        label="Search"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}/>
    </Grid>
    <Grid size={3}>
    <FormControl fullWidth size="small">
      <InputLabel id="brand-label">Brand</InputLabel>
      <Select 
        aria-labelledby="brand-label"
        value={brand}
        label="Brand" 
        onChange={(e) => setBrand(e.target.value)}>
        <MenuItem value="">All</MenuItem>
        <MyListSubheader>Clothing</MyListSubheader>
          <MenuItem value="Dusan">Dusan</MenuItem>
          <MenuItem value="QL2">QL2</MenuItem>
          <MenuItem value="Kenzo">Kenzo</MenuItem>
          <MenuItem value="Tory Burc">Tory Burc</MenuItem>
          <MenuItem value="Adidas">Adidas</MenuItem>
          <MenuItem value="Stella McCartney">Stella McCartney</MenuItem>
          <MenuItem value="Blumarine">Blumarine</MenuItem>
          <MenuItem value="Michael Kors">Michael Kors</MenuItem>
          <MenuItem value="MSGM">MSGM</MenuItem>
          <MenuItem value="Stone Island">Stone Island</MenuItem>
          <MenuItem value="Ermanno Scervino">Ermanno Scervino</MenuItem>
          <MenuItem value="Herno">Herno</MenuItem>
          <MenuItem value="Dondup">Dondup</MenuItem>
          <MenuItem value="Woolrich">Woolrich</MenuItem>
          <MenuItem value="Tagliatore">Tagliatore</MenuItem>
          <MenuItem value="Polo Ralph Lauren">Polo Ralph Lauren</MenuItem>
          <MenuItem value="Plan C">Plan C</MenuItem>
          <MenuItem value="Jil Sander">Jil Sander</MenuItem>
          <MenuItem value="R13">R13</MenuItem>
          <MenuItem value="FourTwoFour on Fairfax">FourTwoFour on Fairfax</MenuItem>
          <MenuItem value="1017 ALYX 9SM">1017 ALYX 9SM</MenuItem>
          <MenuItem value="The Row">The Row</MenuItem>
          <MenuItem value="GCDS">GCDS</MenuItem>
          <MenuItem value="Givenchy">Givenchy</MenuItem>
          <MenuItem value="Versace">Versace</MenuItem>
        <MyListSubheader>Accessories</MyListSubheader>
          <MenuItem value="Sofie d'Hoore">Sofie d Hoore</MenuItem>
          <MenuItem value="Stella McCartney Eyewear">Stella McCartney Eyewear</MenuItem>
          <MenuItem value="Destin">Destin</MenuItem>
          <MenuItem value="Dolce & Gabbana">Dolce &amp; Gabbana</MenuItem>
          <MenuItem value="Christian Louboutin">Christian Louboutin</MenuItem>
          <MenuItem value="Stella McCartney">Stella McCartney</MenuItem>
          <MenuItem value="Michael Kors">Michael Kors</MenuItem>
        <MyListSubheader>Tableware</MyListSubheader>
          <MenuItem value="Le Botteghe su Gologone">Le Botteghe su Gologone</MenuItem>
        <MyListSubheader>Jewelry</MyListSubheader>
          <MenuItem value="Lo Spazio Jewelry">Lo Spazio Jewelry</MenuItem>
        <MyListSubheader>Shoes</MyListSubheader>
          <MenuItem value="Gucci">Gucci</MenuItem>
          <MenuItem value="Le Sur">Le Sur</MenuItem>
      </Select>
    </FormControl>
    </Grid>
    <Grid size={3}>
    <FormControl fullWidth size="small">
      <InputLabel id="gender-label">Gender</InputLabel>
      <Select 
        value={gender}
        label="Gender"
        aria-labelledby="gender-label" 
        onChange={(e) => setGender(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="unisex">Unisex</MenuItem>
      </Select>
    </FormControl>
    </Grid>
    <Grid size={3}>
    <FormControl fullWidth size="small">
      <InputLabel id="sizes-label">Sizes</InputLabel>
      <Select 
        value={sizes}
        label="Sizes"
        aria-labelledby="sizes-label" 
        onChange={(e) => setSizes(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="S">S</MenuItem>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="L">L</MenuItem>
          <MenuItem value="XL">XL</MenuItem>
          <MenuItem value="XXL">XLL</MenuItem>
          <MenuItem value="one size">One Size</MenuItem>
          <MenuItem value="30">30</MenuItem>
          <MenuItem value="32">32</MenuItem>
          <MenuItem value="34">34</MenuItem>
          <MenuItem value="40">40</MenuItem>
          <MenuItem value="46">46</MenuItem>
          <MenuItem value="50">50</MenuItem>
          <MenuItem value="52">52</MenuItem>
      </Select>
    </FormControl>
    </Grid>
    </Grid>
    <InfiniteScroll
      dataLength={products.length}
      next={fetchMoreProducts}
      hasMore={hasMore}
      aria-live="polite"
      aria-busy={hasMore ? "true" : "false"} >
    <Grid container spacing={3} p={2}>
      {filteredProducts.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
    </Grid>
    </InfiniteScroll>
    {filteredProducts.length === 0 && (
     <Alert severity="error">
      No product found
   </Alert>
    )}
    </Fragment>
  );
}
