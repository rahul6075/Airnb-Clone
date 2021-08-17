import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import { motion } from "framer-motion";
import { stagger } from "../animation";
import MapItem from "../components/MapItem";
function Search({ searchResults }) {
  const router = useRouter();
  //   console.log(searchResults);
  const { location, startDate, endDate, noOfGuest } = router.query;

  //   const date = new Date(startDate);
  //   const date2 = new Date(endDate);
  //   const fstartDate = format(date, "dd MMMM yy");

  //   const fendDate = format(date2, "dd MMMM yy");
  const range = `${startDate} - ${endDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest}`} />
      <main className="max-w-9xl mx-auto flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">
            79+ stays -{range} - for {noOfGuest} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div  className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <motion.p whileHover={{ scale: 1.02, rotate: 0.1 }} className="button">Cancellation Flexibility</motion.p>
            <motion.p whileHover={{ scale: 1.02, rotate: 0.1 }} className="button"> Type of Place</motion.p>
            <motion.p whileHover={{ scale: 1.02, rotate: 0.1 }} className="button">Prices</motion.p>
            <motion.p whileHover={{ scale: 1.02, rotate: 0.1 }} className="button">Rooms and Beds</motion.p>
            <motion.p whileHover={{ scale: 1.02, rotate: 0.1 }} className="button">More filters</motion.p>
          </div>
          <motion.div
            
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </motion.div>
        </section>
        <section className="hidden ml-1 xl:inline-flex xl:min-w-[600px]">
          <MapItem searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
