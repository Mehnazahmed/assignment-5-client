import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { TFacility } from "@/types";
import {
  useDeleteFacilityMutation,
  useGetAllFacilitiesQuery,
} from "@/redux/features/facility/facility.api";

const AllFacilities = () => {
  const { data: facilities, isLoading, refetch } = useGetAllFacilitiesQuery({});
  const [deleteFacility] = useDeleteFacilityMutation();

  useEffect(() => {
    refetch();
  }, []);

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFacility(id);
        refetch();
        Swal.fire("Deleted!", "The facility has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "The facility is safe :)", "error");
      }
    });
  };

  const tableRows = facilities?.data?.map((facility: TFacility) => (
    <TableRow key={facility._id}>
      <TableCell>
        <Avatar>
          <AvatarImage src={facility.image} alt={facility.name} />
          <AvatarFallback>{facility.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell className="text-white">{facility.name}</TableCell>
      <TableCell className="text-white">{facility.location}</TableCell>
      <TableCell className="text-white">${facility.pricePerHour}</TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <Link to={`facilityEdit/${facility._id}`}>
            <Button className="bg-[#F95924] text-white hover:bg-[rgb(9,20,35)] border-2 border-transparent hover:border-[#F95924] transition-colors">
              Edit
            </Button>
          </Link>
          <Button
            onClick={() => handleDelete(facility._id)}
            className="bg-red-600 text-white hover:bg-red-700 border-2 border-transparent hover:border-black transition-colors"
          >
            Delete
          </Button>
        </div>
      </TableCell>
    </TableRow>
  ));

  if (isLoading) {
    return (
      <p className="text-3xl text-center text-black-500 my-2 font-bold">
        Loading....
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          color: "#fff",
          marginBottom: "24px",
        }}
      >
        All <span style={{ color: "#F95924" }}>Facilities</span>
      </h1>

      <div className="mx-auto py-2 sm:px-10">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Image</TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Location</TableHead>
              <TableHead className="text-white">Price per Hour</TableHead>
              <TableHead className="text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllFacilities;
