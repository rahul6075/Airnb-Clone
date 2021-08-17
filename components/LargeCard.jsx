import Image from "next/image";
import { motion } from "framer-motion";
function LargeCard({ img, title, description, buttonText }) {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}
    >
      <section className="relative py-16 cursor-pointer">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 0.5 }}
          whileTap={{
            scale: 0.8,
            rotate: -0.5,
            
          }}
          className="relative h-96 min-w-[300px]"
        >
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </motion.div>
        <div className="absolute top-32 left-12 ">
          <h1 className="text-4xl mb-3 w-64">{title}</h1>
          <p>{description}</p>
          <button className="text-sm text-white bg-gray-900 my-2 px-4 py-2 rounded-lg ">
            {buttonText}
          </button>
        </div>
      </section>
    </motion.div>
  );
}

export default LargeCard;
