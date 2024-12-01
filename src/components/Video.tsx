import { gwecccvideo } from "../assets/videos";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <motion.video
      src={gwecccvideo}
      autoPlay
      loop
      controls
      muted
      className="w-full h-auto"
    >
      Your browser does not support the video tag.
    </motion.video>
  );
};

export default Video;
