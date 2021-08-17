import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { motion } from "framer-motion";
import {fadeInUp} from "../animation";
function InfoCard({img, location,title, description, star, price,total}) {
   
    return (
        <motion.div 
        whileHover={{ scale: 1.05, rotate: 0.1 }}
        whileTap={{
          scale: 0.8,
        }}
        variants={fadeInUp} div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
           <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
               <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
           </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between items-end pt-5">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl">
                    {title}
                </h4>
                <div className="border-b w-10 pt-2"/>
                <p className="pt-2 text-sm trxt-gray-500 flex-grow">{description}</p>
                <div className="flex justify-between">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-500" />
                        {star}
                    </p>
                    <div>
                    <p className="text-lg font-semibold pb-2">{price} </p>
                    <p className="text-right font-extralight"> {total}</p>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default InfoCard
