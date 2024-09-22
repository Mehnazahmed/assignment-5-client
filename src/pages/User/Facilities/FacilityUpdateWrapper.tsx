import { useParams } from "react-router-dom";
import { useGetFacilityByIdQuery } from "@/redux/features/facility/facility.api";
import UpdateFacility from "./UpdateFacility";
import { Spin } from "antd";

const FacilityUpdateWrapper = () => {
  const { id } = useParams(); // Get the facility ID from the URL
  const { data: facility, refetch, isLoading } = useGetFacilityByIdQuery(id); // Fetch the facility data

  if (isLoading) return <Spin size="large" />;

  if (!facility) {
    return <div>Facility not found</div>; // Show an error message if facility is not found
  }

  return <UpdateFacility facility={facility} refetch={refetch} />;
};

export default FacilityUpdateWrapper;
