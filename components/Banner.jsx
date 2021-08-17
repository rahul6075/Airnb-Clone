import Image from "next/image";
function Banner() {
    return (
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px]">
          <Image src="https://links.papareact.com/0fm" 
          layout="fill"
          objectFit="cover"
          />
          <div className="absolute top-1/2 w-full text-center">
             <p className="text-sm sm:text-lg font-medium">Not sure where to go? Perfect.</p>
             <button className="text-purple-500 bg-white my-3 px-10 py-4 shadow-md rounded-full font-extrabold hover:shadow-2xl active:scale-90
              transition duration-150">I'm flexible</button>
            </div>
        </div>
        
    )
}

export default Banner
