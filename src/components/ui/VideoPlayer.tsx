interface VideoPlayerProps {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, controls = true, autoPlay = false, loop = false, muted = false }) => {
  return (
    <video src={src} controls={controls} autoPlay={autoPlay} loop={loop} muted={muted} style={{ width: '100%', height: 'auto' }}>
      Your browser does not support the video tag.

    </video>
  );
};

export default VideoPlayer;
