import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../firebase/AuthContext';
import Bid from '../component/Bid';

const MyBids = () => {
    const [mybids,setMyBids]=useState([])
const {user}=useContext(AuthContext)
    useEffect(()=>{

      if(user?.email){
          fetch(`http://localhost:3000/bids?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyBids(data))
      }
    },[])
    return (
        <div>
            <h1 className='text-2xl m-4'>My Bids:{mybids.length}</h1>
            <div className="overflow-x-auto max-w-10/11 mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SL No</th>
        <th>Product</th>
        <th>Seller</th>
        <th>Bid Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody >
      {/* row 1 */}
  {
    mybids.map((bid,index)=><Bid key={index} mybids={mybids} setMyBids={setMyBids} bid={bid} index={index}></Bid>)
  }

    </tbody>

   
  </table>
</div>
        </div>
    );
};

export default MyBids;