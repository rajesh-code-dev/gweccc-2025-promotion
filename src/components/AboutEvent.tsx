import { motion } from "framer-motion";

const AboutEvent = () => {
  return (
    <motion.section
      className="max-w-4xl mx-auto p-6 text-center"
      id="about"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <h2 className="text-2xl font-bold mb-4">About the Event</h2>
      <p className="text-gray-700">
        GWECCC 2025 is the premier global conference on emerging technologies,
        bringing together industry leaders, visionaries, and innovators to
        discuss the latest trends and insights.
      </p>
    </motion.section>
  );
};

export default AboutEvent;
