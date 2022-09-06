const VideoBox = ({ videoSource }) => {
  return (
    <div className="border bg-black rounded p-4" id="videoBox">
      <video controls>
        <source type="video/mp4" src={videoSource} />
      </video>
    </div>
  );
};

export default VideoBox;
