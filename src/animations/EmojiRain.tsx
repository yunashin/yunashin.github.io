export class EmojiRain {
  container: HTMLElement;
  emojiTypes: string[];
  emojis: Emoji[];
  screenHeight: number;
  isRaining: boolean;
  spawnInterval: number;

  constructor() {
    this.container = document.getElementById("animate") as HTMLElement;
    this.emojiTypes = [
      "🦞",
      "🍇",
      "🥂",
      "🍒",
      "🍕",
      "🍷",
      "🍭",
      "💖",
      "💄",
      "🫶",
      "🧚‍♀️",
      "🐳",
      "🍉",
      "🎾",
      "🌈",
      "🍦",
      "💅",
      "🔥",
      "🍣",
      "💎",
      "🌴",
      "🐶",
      "💃",
      "⚡️",
      "💥",
      "✨",
      "💫",
      "🌸",
    ];
    this.emojis = [];
    this.screenHeight = window.innerHeight;
    this.isRaining = false;
    this.spawnInterval = 0;
  }

  private addEmoji(delay: number, range: number[], color: string) {
    setTimeout(() => {
      var e = new Emoji(
        range[0] + Math.random() * range[1],
        Math.random() * 4,
        color,
        {
          x: -0.15 + Math.random() * 0.3,
          y: 1 + Math.random() * 1,
        },
        range,
        this.screenHeight
      );
      this.emojis.push(e);
    }, delay);
  }

  private spawnNewEmoji() {
    if (!this.isRaining) return;

    const ranges = [
      [10 + 0, 300],
      [10 + 0, -300],
      [10 - 200, -300],
      [10 + 200, 300],
      [10 - 400, -300],
      [10 + 400, 300],
      [10 - 600, -300],
      [10 + 600, 300],
    ];

    const randomRange = ranges[Math.floor(Math.random() * ranges.length)];
    const randomEmoji =
      this.emojiTypes[Math.floor(Math.random() * this.emojiTypes.length)];

    this.addEmoji(0, randomRange, randomEmoji);
  }

  public rainEmojis() {
    // Remove emojis that have gone off screen
    this.emojis = this.emojis.filter((emoji) => emoji.isActive);

    // Update remaining emojis
    this.emojis.forEach((e) => e.update());

    // Spawn new emojis periodically
    this.spawnInterval++;
    if (this.spawnInterval >= 10) {
      // Spawn every 10 frames (roughly every 0.16 seconds at 60fps)
      this.spawnNewEmoji();
      this.spawnInterval = 0;
    }

    requestAnimationFrame(() => this.rainEmojis());
  }

  public startRaining() {
    this.isRaining = true;
    this.rainEmojis();
  }

  public stopRaining() {
    this.isRaining = false;
    this.resetEmojis();
  }

  public resetEmojis() {
    this.emojis.forEach((emoji) => {
      if (emoji.element && emoji.element.parentNode) {
        emoji.element.remove();
      }
    });
    this.emojis = [];
  }
}

class Emoji {
  container: HTMLElement;
  x: number;
  y: number;
  color: string;
  v: { x: number; y: number };
  range: number[];
  element: HTMLElement;
  screenHeight: number;
  isActive: boolean;
  update: () => void;

  constructor(
    x: number,
    y: number,
    c: string,
    v: { x: number; y: number },
    range: number[],
    screenHeight: number
  ) {
    this.container = document.getElementById("animate") as HTMLElement;
    this.x = x;
    this.y = y;
    this.color = c;
    this.v = v;
    this.range = range;
    this.screenHeight = screenHeight;
    this.isActive = true;
    this.element = document.createElement("span");
    this.element.style.opacity = "0";
    this.element.style.position = "absolute";
    this.element.style.fontSize = "26px";
    this.element.style.color =
      "hsl(" + ((Math.random() * 360) | 0) + ",80%,50%)";
    this.element.style.zIndex = "9999";
    this.element.style.pointerEvents = "none";
    this.element.innerHTML = c;
    this.container.appendChild(this.element);

    this.update = function () {
      // Check if emoji has gone off the bottom of the screen
      if (this.y > this.screenHeight + 50) {
        this.isActive = false;
        this.element.remove();
        return;
      }

      this.y += this.v.y;
      this.x += this.v.x;
      this.element.style.opacity = "1";
      this.element.style.transform =
        "translate3d(" + this.x + "px, " + this.y + "px, 0px)";
      this.element.style.webkitTransform =
        "translate3d(" + this.x + "px, " + this.y + "px, 0px)";
    };
  }
}

export const RainingEmojis = () => {
  return (
    <div id="emoji-rain-container">
      <div id="animate" />
    </div>
  );
};
