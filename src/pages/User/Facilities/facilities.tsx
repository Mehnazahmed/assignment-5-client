import { useGetAllFacilitiesQuery } from "@/redux/features/facility/facility.api";

import "../../../App.css";
import { TFacility } from "@/types/facility.type";
import FacilityCard from "./FacilityCard";
import { Spin } from "antd";

const Facilities = () => {
  const {
    data: facilities,
    isLoading,
    //  refetch
  } = useGetAllFacilitiesQuery({});

  if (isLoading) {
    <Spin size="large" />;
  }

  // console.log(facilities);
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
        Available <span style={{ color: "#F95924" }}>Facilities</span>
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto my-8 px-8">
        {facilities?.data?.map((facility: TFacility) => (
          <FacilityCard key={facility?._id} facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default Facilities;
