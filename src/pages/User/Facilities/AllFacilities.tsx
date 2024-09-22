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

import {
  useDeleteFacilityMutation,
  useGetAllFacilitiesQuery,
} from "@/redux/features/facility/facility.api";
import UpdateFacilityModal from "./UpdateFacilityModal";
import { TFacility } from "@/types/facility.type";

const AllFacilities = () => {
  const { data: facilities, isLoading, refetch } = useGetAllFacilitiesQuery({});
  const [deleteFacility] = useDeleteFacilityMutation();

  // console.log(facilities);

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
    <TableRow key={facility._id} className="hover:bg-slate-800 ">
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
        <UpdateFacilityModal facility={facility} refetch={refetch} />

        <Button
          onClick={() => handleDelete(facility._id!)}
          className="bg-red-600 text-white hover:bg-red-700 border-2 border-transparent hover:border-black transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
      </TableCell>
    </TableRow>
  ));

  if (isLoading) {
    return (
      <p className="text-3xl text-center text-white my-2 font-bold">
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
            <TableRow className="hover:bg-slate-800 ">
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
