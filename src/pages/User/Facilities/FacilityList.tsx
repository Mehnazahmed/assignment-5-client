import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TFacility } from "@/types";
import { useGetAllFacilitiesQuery } from "@/redux/features/facility/facility.api";

type TFacilityWithId = TFacility & { _id: string; image: string };
const FacilityList = () => {
  const [sortType] = useState("price");

  const { data: facilities, isLoading, refetch } = useGetAllFacilitiesQuery({});
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [debouncedLocationTerm, setDebouncedLocationTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState<number | null>(null);

  useEffect(() => {
    refetch();
  }, [sortType, debouncedSearchTerm, debouncedLocationTerm, priceFilter]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedLocationTerm(locationTerm);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [locationTerm]);

  const filteredAndSortedFacilities = facilities?.data
    ?.filter(
      (facility: TFacility) =>
        facility.name
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase()) &&
        facility.location
          .toLowerCase()
          .includes(debouncedLocationTerm.toLowerCase())
    )
    .filter((facility: TFacility) =>
      priceFilter ? facility.pricePerHour <= priceFilter : true
    )
    .sort((a: TFacility, b: TFacility) => a.pricePerHour - b.pricePerHour);

  const tableRows = filteredAndSortedFacilities?.map(
    (facility: TFacilityWithId) => (
      <TableRow key={facility?._id}>
        <TableCell>
          <Avatar>
            <AvatarImage src={facility?.image} alt={facility.name} />
            <AvatarFallback>{facility.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </TableCell>
        <TableCell>{facility.name}</TableCell>
        <TableCell>{facility.location}</TableCell>
        <TableCell>${facility.pricePerHour}</TableCell>
        <TableCell>
          <Link to={`/facility/${facility._id}`}>
            <Button className="bg-black text-white hover:bg-[rgb(9,20,35)] border-2 border-transparent hover:border-[#F95924] transition-colors">
              View Details
            </Button>
          </Link>
        </TableCell>
      </TableRow>
    )
  );

  if (isLoading) {
    return (
      <p className="text-3xl text-center text-white my-2 font-bold">
        Loading....
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-bold mt-4 mb-6 border-l-4 p-2 text-center">
        Available Facilities
      </h1>
      <div className="flex flex-col sm:flex-row justify-around items-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-2 border-gray-400 rounded-lg px-4 py-2 mb-2 sm:mb-0"
        />
        <input
          type="text"
          placeholder="Search by location..."
          value={locationTerm}
          onChange={(e) => setLocationTerm(e.target.value)}
          className="border-2 border-gray-400 rounded-lg px-4 py-2 mb-2 sm:mb-0"
        />
        <input
          type="number"
          placeholder="Max price per hour"
          value={priceFilter || ""}
          onChange={(e) => setPriceFilter(Number(e.target.value) || null)}
          className="border-2 border-gray-400 rounded-lg px-4 py-2 mb-2 sm:mb-0"
        />
      </div>
      <div className="mx-auto py-2 sm:px-10">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Price Per Hour</TableHead>
              <TableHead>Actions</TableHead>{" "}
              {/* Added a header for the actions */}
            </TableRow>
          </TableHeader>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FacilityList;
