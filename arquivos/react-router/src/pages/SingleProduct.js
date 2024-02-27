import { Link , useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {

  const {productId} = useParams()

  const product=products.find((product)=>product.id === productId);

  const {image,name} = product;
  return (
    <section className='section product'>
      <h5>{name}</h5>
      <img src={image} alt={name}/><br/>
      <Link to='/products' className="btn">Back</Link>
    </section>
  );
};

export default SingleProduct;
