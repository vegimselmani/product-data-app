import React from 'react';
import Image from "next/image"
import { Card, Typography, Button, CardContent } from "@mui/material"
import styles from '../../styles/Home.module.css'

export default function ProductCard({ product }) {
  return (
    <Card className={styles.card} aria-labelledby={`product-${product.id}-title`}>
        <Image
          src={product.image_link}
          alt={product.title}
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
          blurDataURL={product.additional_image_link}
          priority={false} />
        <CardContent>
          <Typography 
            variant="h6" 
            id={`product-${product.id}-title`}  
            aria-label={`Description of ${product.title}: ${product.description}`}>
            {product.title}
          </Typography>
          <Typography 
           variant="body2" 
           color="textSecondary">
            {product.description}
          </Typography>
          <Typography 
            variant="body1">
              <strong>Price:</strong> {product.sale_price}
          </Typography>
          <Button 
            size="small" 
            href={product.link} target="_blank"
            aria-label={`Go to the product page for ${product.title}`}
            >View Product</Button>
        </CardContent>
  </Card>
  )
}
