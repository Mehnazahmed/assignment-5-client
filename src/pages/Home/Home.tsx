import PopularFacilities from "../User/Facilities/PopularFacilities";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div className="bg-[#212529] mx-auto min-h-full w-full   ">
      <Banner />
      <PopularFacilities />
      <HowItWorks />
    </div>
  );
};

export default Home;
