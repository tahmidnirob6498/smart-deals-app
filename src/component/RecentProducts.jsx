import { Link } from "react-router";
import Products from "./Products";


const RecentProducts = ({products}) => {

    return (
     <div className="max-w-6xl mx-auto space-y-5 mb-10">
        <h1 className="text-3xl font-bold md:text-4xl mt-5 text-center">Recent <span className="text-primary">Products</span></h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {
            products.map(product=><Products key={product._id} product={product}></Products>)
          }  
        </div> 
        <Link to="/allProducts"  className=" btn block w-1/5 flex item-center mx-auto my-10 text-white gradient-primary">Show All</Link>
     </div>
    );
};

export default RecentProducts;