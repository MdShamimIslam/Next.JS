
import Gallery from "@/app/components/hotel/details/Gallery"
import Overview from "@/app/components/hotel/details/Overview"
import Summary from "@/app/components/hotel/details/Summary"
import { getHotelById } from "@/queries/queries"


const HotelDetailsPage = async({params:{id},searchParams:{checkin,checkout}}) => {
  const hotel = await getHotelById(id,checkin,checkout);
  return (
    <>
        <Summary hotel={hotel} />
        <Gallery gallery={hotel?.gallery} />
        <Overview overview={hotel?.overview} />
    </>
  )
}

export default HotelDetailsPage