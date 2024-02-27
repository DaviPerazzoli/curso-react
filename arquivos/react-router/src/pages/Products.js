import products from '../data';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <div className='products'>
        {
          products.map(product=>{
            return(
              <article key={product.id}>
                <h5>product.name</h5>
                <Link to={`/products/${product.id}`}>View</Link>
              </article>
            )
          })
        }
    </div>
  );
};

export default Products;
