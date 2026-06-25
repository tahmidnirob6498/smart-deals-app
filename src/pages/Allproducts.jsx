import { use } from "react";
import Products from "../component/Products";

const allProductsApi=fetch('http://localhost:3000/products').then(res=>res.json())
const Allproducts = () => {
    const products=use(allProductsApi)
   
    return (
        <div className="max-w-6xl mx-auto">
           <h1 className="text-3xl md:text-4xl lg:text-5xl text-center pt-10 pb-10">All <span className="text-primary">Products</span></h1> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                products.map(product=><Products key={product._id} product={product}></Products>)
            }
           </div>
        </div>
    );
};

export default Allproducts;