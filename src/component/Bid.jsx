import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Bid = ({bid,index,setMyBids,mybids}) => {
  const [item,setItem]=useState({})
    const {_id,product,buyer_name,bid_price}=bid
    useEffect(()=>{
      fetch(`http://localhost:3000/products/${product}`)
      .then(res=>res.json())
      .then(data=>setItem(data))
    })

    const handleDelete=(id)=>{
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:3000/bids/${id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount){
         Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });

  const remainingBids=mybids.filter(bid=>bid._id !== _id)
  setMyBids(remainingBids)


      }
    })
  }
});
    }

    return (
    <tr>
        <th>{index + 1}</th>
        <td>{item.title}</td>
        <td>{buyer_name}</td>
        <td>{bid_price}</td>
        <td onClick={()=>handleDelete(_id)} className="text-orange-600 "><span className="btn btn-outline">Remove Bid</span></td>
      </tr>
    );
};

export default Bid;