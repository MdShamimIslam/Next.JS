import BookingCard from "./BookingCard";



const PastBooking = ({bookings}) => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">🕛️ Past Bookings</h2>
        {
          bookings && bookings.length > 0 ?
          bookings.map((booking)=>(
            <div  key={booking.id} className="bg-[#ebf6e9] p-4 rounded-md">
            <BookingCard
              booking={booking}
            />
            </div>
           
          )) : <div>
            <p className="text-green-700">No Booking Added here!!</p>
          </div>
         }
       
      </div>
    );
  };
  
  export default PastBooking;
  