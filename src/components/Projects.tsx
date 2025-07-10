import { useEffect, useMemo, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

import { EmojiRain, RainingEmojis } from "../animations/EmojiRain";
import MenuBar from "./MenuBar";
import AnimatedImageCard from "./ui/AnimatedImageCard";

const Projects = () => {
  const emojiRain = useMemo(() => new EmojiRain(), []);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const hasStartedRainingEmojis = useRef(false);

  useEffect(() => {
    if (hasStartedRainingEmojis.current) return;
    hasStartedRainingEmojis.current = true;
    emojiRain.startRaining();
  }, [emojiRain]);

  return (
    <div>
      <RainingEmojis />
      <MenuBar />
      <h1>side projects</h1>
      <div className="App-body">
        <div className="animated-image-card-container">
          <AnimatedImageCard className={isMobile ? 'margin-bottom' : 'margin-right'} imageUrl="https://i.imgur.com/Phqq8X4.jpeg" buttonText="Bar Genie" onClick={() => window.open('https://yunashin.github.io/bar-genie', '_self')} />
          <AnimatedImageCard className={isMobile ? 'margin-bottom' : 'margin-right'} imageUrl="https://i.imgur.com/iv8i7hk.jpeg" buttonText="Flexicography" onClick={() => window.open('https://yunashin.github.io/flexicography', '_self')} />
          <AnimatedImageCard className={isMobile ? 'margin-bottom-lg' : ''} imageUrl="https://i.imgur.com/abmYtb4.jpeg" buttonText="Menu Maven" onClick={() => window.open('https://yunashin.github.io/menu-maven', '_self')} />
        </div>
      </div>
    </div>
  );
};

export default Projects;