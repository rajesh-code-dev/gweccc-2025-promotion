import { motion } from "framer-motion";

function Banner() {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center h-96 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/banner-bg.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">GWECCC 2025</h1>
      <p className="mt-2 text-xl">March 15-17, 2025 | New York City</p>
    </motion.section>
  );
}

export default Banner;
