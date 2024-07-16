import { ObjectId } from "mongodb";

export default interface Item {
  _id?: ObjectId;
  item_name: string;
  item_price: number;
  item_ratings_ids: string[];
  business_id: string;
}
