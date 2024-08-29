import { Button } from "@/components/ui/button";
import { useGetFacilityByIdQuery } from "@/redux/features/facility/facility.api";

import { useParams } from "react-router-dom";

const FacilityDetails = () => {
  const { id } = useParams();
  console.log(id);

  const { data: facility, isLoading } = useGetFacilityByIdQuery(id);
  console.log(facility);

  if (isLoading) {
    return (
      <p className="text-3xl text-center text-black-500 my-2 font-bold">
        Loading....
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-500 text-white min-h-screen">
      <div className="max-w-6xl w-full bg-[rgb(9,20,35)] rounded-lg shadow-lg p-8 m-10 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-extrabold mb-4 text-center">
          {facility?.data?.name}
        </h1>
        <div className="flex flex-col md:flex-row">
          <img
            src={facility?.data?.image}
            alt="Facility Image"
            className="w-full md:w-1/3 h-auto mb-4 rounded-lg shadow-lg md:mr-6 transform hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col justify-between mt-6">
            <div className="text-gray-400 mb-4">
              <p className="mb-3">
                <span className="font-semibold text-[#F95924]">Location:</span>{" "}
                {facility?.data?.location}
              </p>
              <p className="mb-3">
                <span className="font-semibold text-[#F95924]">
                  Description:
                </span>{" "}
                {facility?.data?.description}
              </p>
              <p className="mb-3">
                <span className="font-semibold text-[#F95924]">
                  Price per Hour:
                </span>{" "}
                ${facility?.data?.pricePerHour}
              </p>
            </div>
            <div className="mb-4">
              <Button className="bg-white text-[#F95924] hover:bg-[rgb(9,20,35)] border-2 border-transparent hover:border-[#F95924] transition-colors">
                Book Facility
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;
