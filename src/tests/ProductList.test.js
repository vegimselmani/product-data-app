import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import ProductList from '../pages/components/ProductList';
import '@testing-library/jest-dom';

describe('ProductList Component', () => {
    test('should render product list and display correct information', () => {
        const initialProducts = [
          { id: 1, title: 'Product 1', brand: 'Adidas', gender: 'unisex', sizes: 'M' },
          { id: 2, title: 'Product 2', brand: 'Kenzo', gender: 'female', sizes: 'S' },
        ];
      
        render(<ProductList initialProducts={initialProducts} />);
      
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
      });
});