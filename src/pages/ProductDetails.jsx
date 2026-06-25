import { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../firebase/AuthContext";
import Bid from "../component/Bid";
import Swal from "sweetalert2";




const ProductDetails = () => {
    const [productBid,setProductBid]=useState([])
    const {user}=use(AuthContext)
    const ref = useRef()
    const handleModal = () => {
        ref.current.showModal()
    }

    const product = useLoaderData()
    
    const { _id, usage, title, seller_name, seller_contact, price_min, price_max, location, image, email, description, condition,
        created_at } = product

 useEffect(()=>{
   fetch(`http://localhost:3000/product/bid/${_id}`)
   .then(res=>res.json())
   .then(data=>setProductBid(data))
 },[_id,setProductBid])

console.log(productBid)
    const handleBidSubmit=(e)=>{
e.preventDefault()
const form=e.target
const product=_id
const buyer_name=form.name.value;
const buyer_email=form.email.value
const bid_price=form.price.value
const buyer_contact=form.contact.value
const newbidUser={
   product,
   buyer_name,
   buyer_email,
   bid_price,
   buyer_contact

}
    

fetch("http://localhost:3000/bids",{
    method:'POST',
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(newbidUser)
})
.then(res=>res.json())
.then(data=>{
    if(data.insertedId){
ref.current.close()
Swal.fire({
  title: "Successfully Added to database",
  icon: "success",
  draggable: true,
  position: "top-end"
});

const allBidProduct=[...productBid,newbidUser]
allBidProduct.sort((a,b)=>a.bid_price-b.bid_price)
setProductBid(allBidProduct)
    }
})

}


    return (
        <div className="max-w-6xl p-5 mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold py-5 md:py-10">Product <span className="text-primary">Details</span></h1>
            {/*product*/}
            <div className="flex flex-col  gap-5 md:flex-row">
                <div className="md:w-[50%] flex flex-col gap-5">
                    <div>
                        <img src={image} className="max-w-[60%] mx-auto" alt="" />
                    </div>
                    <div className="bg-gray-100 shadow p-3">
                        <h1 className=" md:text-xl font-semibold p-1 md:p-2 lg:p-3">Product Description</h1>
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-sm"><span className="text-primary">Condition:</span>{condition}</p>
                            <p className="font-bold text-sm"><span className="text-primary">Usage:</span>{usage}</p>
                        </div>
                        <div className="divider"></div>
                        <p className="">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="md:w-[50%]">
                    <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
                    <div className="bg-gray-100 shadow p-3 my-3">
                        <p className="text-xl md:text-2xl font-bold text-primary">${price_min}-{price_max}</p>
                        <p>Price starts from </p>
                    </div>
                    {/* Produt details */}
                    <div className="bg-gray-100 shadow p-3 my-3">
                        <h1 className="md:text-xl font-bold">Product Details</h1>
                        <p className="text-sm p-1"><span className="font-semibold">ProductId:</span> {_id}</p>
                        <p className="text-sm p-1"><span className="font-semibold">Posted:</span>{created_at}</p>
                    </div>
                    {/* seller information */}
                    <div className="bg-gray-100 shadow p-3 my-3">
                        <p className="text-sm p-1"><span className="font-semibold">Seller Name:</span>{seller_name}</p>
                        <p className="text-sm p-1"><span className="font-semibold">Email:</span>{email}</p>
                        <p className="text-sm p-1"><span className="font-semibold">Location:</span>{location}</p>
                        <p className="text-sm p-1"><span className="font-semibold">Contact:</span> {seller_contact}</p>

                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <dialog ref={ref} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h1 className="text-xl  text-center md:text-2xl  font-medium">Give Seller Your Offered Price</h1>
                            {/* form */}
                            <form onSubmit={handleBidSubmit} className="fieldset mx-auto" >
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" name="email" defaultValue={user?.email} placeholder="Email" />
                                <label className="label">Name</label>
                                <input type="text" className="input w-full" name="name" defaultValue={user?.displayName} placeholder="name" />
                                <label className="label">Place your price</label>
                                <input type="text" className="input w-full" name="price" placeholder="Your Bid Price" />
                                <label className="label">Contact</label>
                                <input type="text" className="input w-full" name="contact" placeholder="contact" />
                             
                                <button className="btn btn-neutral mt-4 gradient-primary">Submit Bid</button>
                        
                               
                            </form>





                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <button onClick={handleModal} className="btn text-white gradient-primary w-full">I Want Buy This Product</button>
                </div>
            </div>
            <div className="my-5">
             <h1 className="text-xl md:text-2xl font-semibold">Bid For This Products:{productBid.length}</h1>
             <div className="bg-gray-100 shadow p-3 mt-3">
              <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SL no.</th>
        <th>Product</th>
        <th>Seller</th>
        <th>Bid Price</th>
        
      </tr>
    </thead>
    <tbody>
     {
          
       productBid.map((bid,index)=><Bid index={index} key={bid._id} bid={bid}></Bid>)
                
     }
  
    </tbody>
  </table>
</div>

             </div>
            </div>
        </div>
    );
}

export default ProductDetails;