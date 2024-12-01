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
      <motion.h1
        className="text-[2rem] md:text-[6rem] font-bold"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        GWECCC 2025
      </motion.h1>
      <motion.p
        className="mt-2 text-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        March 15-17, 2025 | New York City
      </motion.p>
    </motion.section>
  );
}

export default Banner;
