import { CUISINE_FOOD_TAGS, FOOD_TAGS, LOCATION_FOOD_TAGS } from "../data/FoodPageData";

export type FoodImage = {
  id: string;
  imageUrl: string;
  caption: string;
  description?: string;
  tags: string[];
}

export type FoodTag = typeof FOOD_TAGS[number];
export type LocationFoodTag = typeof LOCATION_FOOD_TAGS[number];
export type CuisineFoodTag = typeof CUISINE_FOOD_TAGS[number];
