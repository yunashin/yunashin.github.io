import { useNavigate, useSearchParams } from "react-router";

import { FOOD_PAGE_DATA } from "../../data/FoodPageData";
import MenuBar from "../MenuBar";
import TagBadge from "../blog/TagBadge";
import PageTitle from "../ui/PageTitle";

const FoodImagePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const image = FOOD_PAGE_DATA.find((image) => image.id === id);

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <>
      <MenuBar />
      <div className="App-body">
        <PageTitle
          title={image.caption}
          onClick={() => navigate("/lifestyle/food")}
        />
        <div className="centered-container">
          <div className="tags-container">
            {image.tags.map((tag) => (
              <TagBadge key={`${tag}-${image.id}`} tagName={tag} isHashtag />
            ))}
          </div>
        </div>
        <div className="centered-container">
          <img
            src={image.imageUrl}
            alt={image.caption}
            className="food-image"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default FoodImagePage;
