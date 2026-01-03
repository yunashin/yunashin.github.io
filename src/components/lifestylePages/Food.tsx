import { ChangeEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router";

import {
  CUISINE_FOOD_TAGS,
  FOOD_PAGE_DATA,
  LOCATION_FOOD_TAGS,
} from "../../data/FoodPageData";
import MenuBar from "../MenuBar";
import { FoodTag } from "../../types/FoodPageTypes";
import Dropdown from "../ui/Dropdown";
import FoodPageImage from "./FoodPageImage";
import PageTitle from "../ui/PageTitle";

const Food = () => {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState<FoodTag[]>([]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCuisineDropdownOpen, setIsCuisineDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const allTagsHidden = selectedTags.length === 0;
  const filteredFoodImages = useMemo(
    () =>
      allTagsHidden
        ? FOOD_PAGE_DATA.filter((foodImage) => {
            const searchTextMatch =
              searchText === ""
                ? true
                : foodImage.caption
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase());
            return searchTextMatch;
          })
        : FOOD_PAGE_DATA.filter((foodImage) => {
            const selectedLocationTags = selectedTags.filter((tag) =>
              LOCATION_FOOD_TAGS.includes(tag)
            );
            const selectedCuisineTags = selectedTags.filter((tag) =>
              CUISINE_FOOD_TAGS.includes(tag)
            );
            const locationTags =
              selectedLocationTags.length > 0
                ? selectedLocationTags
                : LOCATION_FOOD_TAGS;
            const cuisineTags =
              selectedCuisineTags.length > 0
                ? selectedCuisineTags
                : CUISINE_FOOD_TAGS;
            const foodImageLocationTags = foodImage.tags.filter((tag) =>
              LOCATION_FOOD_TAGS.includes(tag)
            );
            const foodImageCuisineTags = foodImage.tags.filter((tag) =>
              CUISINE_FOOD_TAGS.includes(tag)
            );
            const locationMatch =
              selectedLocationTags.length > 0
                ? foodImageLocationTags.some((tag) =>
                    locationTags.includes(tag)
                  )
                : true;
            const cuisineMatch =
              selectedCuisineTags.length > 0
                ? foodImageCuisineTags.some((tag) => cuisineTags.includes(tag))
                : true;
            const searchTextMatch =
              searchText === ""
                ? true
                : foodImage.caption
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase());

            return locationMatch && cuisineMatch && searchTextMatch;
          }),
    [allTagsHidden, searchText, selectedTags]
  );

  const numberOfEmptyColumns = 4 - (filteredFoodImages.length % 4);

  const FoodImages = useMemo(
    () =>
      filteredFoodImages.map((foodImage, idx) => (
        <FoodPageImage
          key={`${foodImage.id}-${idx}`}
          foodImage={foodImage}
          idx={idx}
        />
      )),
    [filteredFoodImages]
  );

  return (
    <>
      <MenuBar />
      <div className="App-body">
        <PageTitle title="food" onClick={() => navigate("/lifestyle")} />
        <p>
          Check out my{" "}
          <a
            href="https://maps.app.goo.gl/cVdvr4714nkMzNA77"
            rel="noreferrer"
            target="_blank"
          >
            Google Map
          </a>{" "}
          of restaurants and bars!
        </p>
        <div className="centered-container">
          <div className="flex-box-vertical">
            <input
              id="food-page-search-input"
              className="food-page-search-input"
              type="text"
              placeholder="Search"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchText(e.target.value)
              }
              value={searchText}
            />
            <div className="dropdown-container">
              <Dropdown
                className="dropdown-filter"
                options={LOCATION_FOOD_TAGS}
                isOpen={isLocationDropdownOpen}
                setIsOpen={setIsLocationDropdownOpen}
                selectedOptions={selectedTags}
                setSelectedOptions={setSelectedTags}
                isMultiSelect={true}
                placeholder="Locations"
                optionFooter={{
                  buttonText: "Select all locations",
                  onClick: () => setSelectedTags(LOCATION_FOOD_TAGS),
                }}
              />
              <Dropdown
                className="dropdown-filter"
                options={CUISINE_FOOD_TAGS}
                isOpen={isCuisineDropdownOpen}
                setIsOpen={setIsCuisineDropdownOpen}
                selectedOptions={selectedTags}
                setSelectedOptions={setSelectedTags}
                isMultiSelect={true}
                placeholder="Cuisines"
                optionFooter={{
                  buttonText: "Select all cuisines",
                  onClick: () => setSelectedTags(CUISINE_FOOD_TAGS),
                }}
              />
              <button
                disabled={allTagsHidden}
                className="link-button toggle-all-tags-button"
                onClick={() => !allTagsHidden && setSelectedTags([])}
              >
                Clear all tags
              </button>
            </div>
          </div>
        </div>
        <div className="centered-container">
          <div className="food-images">
            {filteredFoodImages.length === 0 && (
              <div>
                There are no images that match your filters! Try clearing all
                tags.
              </div>
            )}
            <div className="grid-row">
              {FoodImages}
              {numberOfEmptyColumns > 0 &&
                Array.from({ length: numberOfEmptyColumns }).map((_, idx) => (
                  <div key={`empty-column-${idx}`} className="grid-column" />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
