import { useEffect, useState } from "react";
import Banner from "../component/Banner";
import RecentProducts from "../component/RecentProducts";
import Footer from "../component/Footer";



const Home = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
    fetch("http://localhost:3000/recentProducts")
    .then(res=>res.json())
    .then(data=>{
        setProducts(data)
    })
},[])

    return (
        <div>
         <Banner></Banner> 
         <RecentProducts products={products}></RecentProducts>
          <Footer></Footer>
        </div>
       
    );
};

export default Home;