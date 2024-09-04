


import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = ({hotelInfo}) => {
  const {thumbNailUrl,name} = hotelInfo;
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={thumbNailUrl}
        className="max-h-[162px] max-w-[240px]"
        alt={name}
        width={240}
        height={165}
      />
      <HotelSummaryInfo
       fromListPage={true} 
       hotelInfo={hotelInfo}
       />
    </div>
  );
};

export default HotelCard;
