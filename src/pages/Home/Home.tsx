import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import PopularFacilities from "./PopolarFacilities";

const Home = () => {
  return (
    <div className="bg-[#212529] mx-auto  ">
      <Banner />
      <PopularFacilities />
      <HowItWorks />
    </div>
  );
};

export default Home;
