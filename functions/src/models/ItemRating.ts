import { ObjectId } from "mongodb";

export default interface ItemRating {
  _id?: ObjectId;
  user_id: string;
  user_rating: number;
  user_comment: string | null;
  user_item_image_urls: string[];
  user_rating_date: string;
}
