import { Link } from "react-router";


const Products = ({product}) => {
    const {_id,condition,image,price_max,price_min,title}=product
    return (
     <div className="card bg-base-100 border border-gray-200 shadow-lg">
  <figure className=" px-4 pt-4">
    <img
      src={image}
      alt={title}
      className="rounded-xl max-h-64" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}({condition})</h2>
    <p>${price_min}-{price_max}</p>
    <div className="card-actions">
      <Link to={`/products/${_id}`} className="btn btn-dash btn-primary w-full">Buy Now</Link>
    </div>
  </div>
</div>
    );
};

export default Products;