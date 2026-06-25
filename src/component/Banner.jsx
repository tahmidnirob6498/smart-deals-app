import { IoSearch } from "react-icons/io5";

const Banner = () => {
    return (
        <div className="min-h-[66vh] w-full bg-gradient-to-r from-[#FFE6FD] to-[rgb(224,248,245)] flex flex-col justify-center items-center text-center">
           <div className="">
            <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-2xl font-bold ">Deal your Products in a Smart way !</h1> 
           <p className="py-3 md:py-4 lg:py-5 text-gray-700">SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</p>
           </div>
<div className="flex items-center ">
               <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" /> 
</label>
<p className="gradient-primary rounded-r-2xl w-9 h-10 flex justify-center items-center"><IoSearch size={20} color="white"/></p>
</div>

  <div className="flex py-3 md:py-4 lg:py-5 gap-2 md:gap-3 lg:gap-4">
      <button className="btn gradient-primary text-white">Watch All Products</button>
    <button className="btn ">Post an Product</button>
  </div>

        </div>
    );
};

export default Banner;