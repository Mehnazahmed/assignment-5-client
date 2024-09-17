import { useGetAllFacilitiesQuery } from "@/redux/features/facility/facility.api";

import "../../../App.css";
import { TFacility } from "@/types/facility.type";
import FacilityCard from "./FacilityCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Spin } from "antd";

const PopularFacilities = () => {
  const {
    data: facilities,
    isLoading,
    //  refetch
  } = useGetAllFacilitiesQuery({});

  console.log(facilities);

  if (isLoading) {
    <Spin size="large" />;
  }

  console.log(facilities);
  return (
    <div className="services-section ">
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          color: "#fff",
          marginBottom: "24px",
        }}
      >
        Our Popular <span style={{ color: "#F95924" }}>Facilities</span>
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto my-8 px-8">
        {facilities?.data?.slice(0, 2).map((facility: TFacility) => (
          <FacilityCard key={facility?._id} facility={facility} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/facilities">
          <Button className="bg-white text-[#F95924] hover:bg-[rgb(9,20,35)] border-2 border-transparent hover:border-[#F95924] transition-colors inline-block">
            {" "}
            More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PopularFacilities;
