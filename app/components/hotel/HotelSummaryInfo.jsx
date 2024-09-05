
import Link from "next/link";
import HotelRating from "./HotelRating";
import HotelReviewNumber from "./HotelReviewNumber";

const HotelSummaryInfo = ({ fromListPage, hotelInfo,checkin,checkout }) => {

  const { id, name, city, propertyCategory, highRate, lowRate } = hotelInfo;
  const nightPirce = (highRate + lowRate) / 2;

  let params = "";

  if (checkin && checkout) {
    params= `?checkin=${checkin}&checkout=${checkout}`;
  }

  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2
          className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}
        >
          {name}
        </h2>
        <p>📍 {city}</p>
        <div className="flex gap-2 items-center my-4">
          <HotelRating id={id} />
          <HotelReviewNumber id={id} />
          {
          hotelInfo?.isBooked && <span>Sold Out</span>
          }
        </div>
        <div>
          <span className="bg-yellow-300 p-1 rounded-md">
            {propertyCategory} Star Property
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">${nightPirce}/night</h2>
        <p className=" text-right">Per Night for 1 Rooms</p>
        {fromListPage ? (
          <Link href={`/hotels/${id}${params}`} className="btn-primary ">Details</Link>
        ) : (
          <button className={hotelInfo?.isBooked ? "btn-disabled": "btn-primary"}>Book</button>
        )}
      </div>
    </>
  );
};

export default HotelSummaryInfo;
