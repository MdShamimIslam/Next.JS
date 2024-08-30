
import HeroSection from "@/app/components/details/HeroSection";
import EventDetails from "@/app/components/details/EventDetails";
import EventMap from "@/app/components/details/EventMap";
import { getEventById } from "@/actions/event";

const SingleEventDetails = async({params:{id}}) => {
  const eventInfo = await getEventById(id);
  const {location,details,swags} = eventInfo;
  // console.log(eventInfo.swags);

  return (
    <>
      <HeroSection eventInfo={eventInfo}/>
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={details} swags={swags}/>
          <EventMap location={location}/>
        </div>
      </section>
    </>
  )
}

export default SingleEventDetails;