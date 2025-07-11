import { useNavigate } from "react-router";
import { useMediaQuery } from "usehooks-ts";

import MenuBar from "./MenuBar";
import AnimatedImageCard from "./ui/AnimatedImageCard";
import PageTitle from "./ui/PageTitle";

const Lifestyle = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <MenuBar />
      <div className="App-body">
        <PageTitle title="lifestyle" onClick={() => navigate("/")} />
        <div className="animated-image-card-container">
          <AnimatedImageCard
            className={isMobile ? "margin-bottom" : "margin-right"}
            imageUrl="https://i.imgur.com/69H1JDz.jpeg"
            buttonText="blog"
            onClick={() => navigate("/lifestyle/blog")}
          />
          <AnimatedImageCard
            className={isMobile ? "margin-bottom" : "margin-right"}
            imageUrl="https://i.imgur.com/Xoqjtmb.jpeg"
            buttonText="food"
            onClick={() => navigate("/lifestyle/food")}
          />
          <AnimatedImageCard
            className={isMobile ? "margin-bottom" : "margin-right"}
            imageUrl="https://i1.sndcdn.com/artworks-000204551882-65nvao-t500x500.jpg"
            buttonText="soundcloud"
            onClick={() =>
              window.open("https://soundcloud.com/yunac0rn", "_blank")
            }
          />
          <AnimatedImageCard
            className={isMobile ? "margin-bottom-lg" : ""}
            imageUrl="https://i.imgur.com/yVfvpCC.jpeg"
            buttonText="instagram"
            onClick={() =>
              window.open("https://www.instagram.com/yuna.shin", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
