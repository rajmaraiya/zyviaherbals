import { Metadata } from 'next';
import ProductsPage from '@/pages/ProductsPage';

export const metadata: Metadata = {
  title: 'All Products | Zyvia Herbals',
  description: 'Explore our complete collection of premium Himalayan Shilajit products including honey sticks, gummies, and pure resin.',
};

export default function AllProductsPage() {
  return <ProductsPage showAllProducts={true} />;
}
