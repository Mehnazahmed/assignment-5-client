import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="bg-[rgb(9,20,35)] py-12 text-white flex flex-col items-center justify-center text-center">
      <div className=" ">
        <h1
          className="text-6xl font-bold mb-4"
          style={{ fontFamily: "'Fira Sans Extra Condensed', sans-serif" }}
        >
          Connecting people <br /> Through
          <span className="text-4xl font-bold mb-4 text-[#F95924] ml-4">
            Sports
          </span>
        </h1>
        <h1 className="text-lg mb-8">
          Discover top-notch amenities and{" "}
          <span className="text-[#F95924]">book</span> your spot today <br /> to
          enjoy an exceptional <span className="text-[#F95924]">sports</span>{" "}
          experience.
        </h1>
        <Button
          className="bg-white text-[#F95924] hover:bg-[rgb(9,20,35)] border-2 border-transparent hover:border-[#F95924] transition-colors"
          onClick={() => (window.location.href = "/book-now")}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
