import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { BOX_SHADOW_COLOR } from "../../constants/styleConstants";
import Button from "./Button";

interface AnimatedImageCardProps {
  imageUrl: string;
  buttonText: string;
  onClick: () => void;
  className?: string;
  styles?: React.CSSProperties;
}

const AnimatedImageCard = ({
  imageUrl,
  buttonText,
  onClick,
  className = "",
  styles = {},
}: AnimatedImageCardProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isHovered, setIsHovered] = useState(isMobile);

  return (
    <div
      className={`animated-image-card ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={styles}
      onClick={onClick}
    >
      <img src={imageUrl} alt="animated-card" loading="lazy" />
      <div className="animated-image-card-overlay">
        <Button
          className={`animated-image-card-button ${isHovered ? "hovered-animated-image-card-button" : ""}`}
          onClick={onClick}
          styles={{
            boxShadow: isHovered ? `0 0 10px 0 ${BOX_SHADOW_COLOR}` : "none",
            border: "none",
          }}
          usePrimary={isHovered}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default AnimatedImageCard;
