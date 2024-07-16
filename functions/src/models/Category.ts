import { ObjectId } from "mongodb";

export default interface Category {
  _id?: ObjectId;
  category_name: string;
}
