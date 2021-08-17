import Image from "next/image";
import { motion } from "framer-motion";
import {fadeInUp} from "../animation";
function SmallCard({ img, distance, location }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl 
        cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
    >
      
        <motion.div variants={fadeInUp} className="relative h-16 w-16">
          <Image src={img} layout="fill" className="rounded-lg" />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <h2>{location}</h2>
          <h3 className="text-gray-500">{distance}</h3>
        </motion.div>
     
    </div>
  );
}

export default SmallCard;
