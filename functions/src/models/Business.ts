import { ObjectId } from "mongodb";

export default interface Business {
  _id: ObjectId;
  business_name: string;
  business_address: Address;
  business_coordinates: Coordinates;
  business_url: string | null;
  business_phone_number: string | null;
  business_rating: number;
  item_ids: string[];
}

interface Address {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
}

interface Coordinates {
  latitude: number;
  longitude: number;
}
