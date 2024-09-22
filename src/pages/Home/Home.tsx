import PopularFacilities from "../User/Facilities/PopularFacilities";
import Banner from "./Banner";
import Gallery from "./Gallery/Gallery";
import HowItWorks from "./HowItWorks";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div className="bg-[#212529] mx-auto min-h-full w-full   ">
      <Banner />
      <PopularFacilities />
      <HowItWorks />
      <Gallery />
      <Reviews />
    </div>
  );
};

export default Home;
