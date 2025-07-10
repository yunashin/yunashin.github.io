import { useState } from "react";
import { useNavigate } from "react-router";

import TagBadge from "../blog/TagBadge";
import { FoodImage } from "../../types/FoodPageTypes";

const FoodPageImage = ({ foodImage, idx }: { foodImage: FoodImage, idx: number }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return <div key={`${foodImage.id}-${idx}`} className="grid-column">
    <img src={foodImage.imageUrl} alt="food" onClick={() => navigate(`/lifestyle/food-image?id=${foodImage.id}`)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} loading="lazy" />
    <p className={`food-image-caption ${isHovered ? 'food-image-caption-hovered' : ''}`}><b>{foodImage.caption}</b></p>
    <div className="flex-box-horizontal wrap">
      {foodImage.tags.map((tag) => (
        <TagBadge key={`${tag}-${foodImage.id}`} tagName={tag} isHashtag styles={{ marginTop: '0' }} />
      ))}
    </div>
  </div>;
};

export default FoodPageImage;