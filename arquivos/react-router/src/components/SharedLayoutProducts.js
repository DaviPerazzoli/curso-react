import products from '../data';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <>
      
      <section className='section'>
        <h2>products</h2>
        <Outlet/>
        
      </section>
    </>
  );
};

export default Products;
