import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

// get all hotels
export const getAllHotels = async () => {
  const hotels = await hotelModel
    .find()
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();
  return replaceMongoIdInArray(hotels);
};

// get hotel by id
export const getHotelById = async(hotel_id)=>{
  const hotel = await hotelModel.findById(hotel_id).lean();
  return replaceMongoIdInObject(hotel);
}

// get ratings by hotel id
export const getRatingsForHotel = async (hotel_id) => {
  const ratings = await ratingModel.find({ hotelId: hotel_id }).lean();
  return replaceMongoIdInArray(ratings);
};

// get reviews by hotel id
export const getReviewsForHotel = async (hotel_id) => {
  const reviews = await reviewModel.find({ hotelId: hotel_id }).lean();
  return replaceMongoIdInArray(reviews);
};
