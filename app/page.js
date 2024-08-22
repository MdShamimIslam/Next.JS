import ProductItem from './components/ProductItem';
import { products } from './data/products';

export const metadata = {
  title: "Home",
  description: "This is home page",
};

export default function Home() {
 
  return (
    <div className='grid grid-cols-4 gap-5 mt-8'>
      {
        products.map(product => <ProductItem key={product.id} product={product}/>)
      }
    </div>
  );
}
