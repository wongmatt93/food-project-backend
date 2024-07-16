import { ObjectId } from "mongodb";

export interface UserProfile {
  _id?: ObjectId;
  user_uid: string;
  user_username: string;
  user_display_name: string;
  user_email: string;
  user_phoneNumber: string | null;
  user_photoURL: string | null;
  item_rating_ids: string[];
}
