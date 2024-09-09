"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";



const PaymentForm = ({loggedInUser,hotelInfo,checkin,checkout,totalHotelCost}) => {
  const router = useRouter();
  const [error,setError] = useState("");

  const handlePaymentSubmit = async(e)=>{
    e.preventDefault();
 
    try {
      const hotelId = hotelInfo?.id;
      const userId = loggedInUser?.id;

      const res = await fetch("/api/auth/payment",{
        method:"POST",
        headers:{
         "Content-Type": "application/json"
        },
        body: JSON.stringify({ hotelId,userId,checkin,checkout })
      });

      res.status === 201 && router.push('/bookings');
      
    } catch (err) {
      setError(err.message)
    }
  }

    return (
      <form className="my-8" onSubmit={handlePaymentSubmit}>
      <p  className="text-red-600">{error}</p>
        <div className="my-4 space-y-2">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={loggedInUser?.name}
            readOnly
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>
  
        <div className="my-4 space-y-2">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            defaultValue={loggedInUser?.email}
            readOnly
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>
  
        <div className="my-4 space-y-2">
          <span>Checkin</span>
          <h4 className="mt-2">
            <input type="date" defaultValue={checkin} readOnly name="checkin" id="checkin" />
          </h4>
        </div>
  
        <div className="my-4 space-y-2">
          <span>Checkout</span>
          <h4 className="mt-2">
            <input type="date" defaultValue={checkout} readOnly name="checkout" id="checkout" />
          </h4>
        </div>
  
        <div className="my-4 space-y-2">
          <label htmlFor="card" className="block">
            Card Number
          </label>
          <input
            type="text"
            id="card"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>
  
        <div className="my-4 space-y-2">
          <label htmlFor="expiry" className="block">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>
  
        <div className="my-4 space-y-2">
          <label htmlFor="cvv" className="block">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>
  
        <button type="submit" className="btn-primary w-full">
          Pay Now (${totalHotelCost})
        </button>
      </form>
    );
  };
  
  export default PaymentForm;
  