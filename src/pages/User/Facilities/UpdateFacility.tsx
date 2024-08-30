import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState, useEffect, FormEvent } from "react";
// import Swal from "sweetalert2";
import { TFacility } from "@/types";
import { useUpdateFacilityMutation } from "@/redux/features/facility/facility.api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFacility = ({
  facility,
  refetch,
}: {
  facility: TFacility;
  refetch: () => void;
}) => {
  const [name, setName] = useState(facility?.data.name || "");
  const [image, setImage] = useState(facility?.data.image || "");
  const [description, setDescription] = useState(
    facility?.data.description || ""
  );
  const [pricePerHour, setPricePerHour] = useState(
    facility?.data.pricePerHour || 0
  );
  const [location, setLocation] = useState(facility?.data.location || "");

  const [updateFacility, { isLoading }] = useUpdateFacilityMutation();

  if (isLoading) {
    <p className="text-3xl text-center text-black-500 my-2 font-bold">
      Loading....
    </p>;
  }
  const navigate = useNavigate();
  console.log(facility);
  useEffect(() => {
    if (facility) {
      setName(facility.data?.name);
      setImage(facility.data?.image);
      setDescription(facility.data?.description);
      setPricePerHour(facility.data?.pricePerHour);
      setLocation(facility.data?.location);
    }
  }, [facility]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !image || !description || pricePerHour <= 0 || !location) {
      Swal.fire("Error", "All fields are required and must be valid", "error");
      return;
    }

    const updatedFacility = {
      _id: facility.data._id,
      name,
      image,
      description,
      pricePerHour,
      location,
    };
    console.log(updatedFacility);

    try {
      await updateFacility({
        id: facility?.data?._id,
        ...updatedFacility,
      });
      //   refetch();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Facility Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/facilities");
    } catch (error) {
      console.error("Error updating facility:", error);
      Swal.fire("Error", "Failed to update facility", "error");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold text-center text-[#F95924] mb-8">
        Update Facility
      </h1>
      <form onSubmit={onSubmit} className="max-w-xl mx-auto">
        <div className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-white">
              Facility
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <Input
              id="image"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="pricePerHour" className="text-right">
              Price per Hour
            </Label>
            <Input
              id="pricePerHour"
              type="number"
              value={pricePerHour}
              onChange={(e) => setPricePerHour(parseFloat(e.target.value))}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            type="submit"
            className="bg-[#F95924] text-white hover:bg-red-700 px-6 py-2 rounded-lg"
          >
            Update Facility
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFacility;
