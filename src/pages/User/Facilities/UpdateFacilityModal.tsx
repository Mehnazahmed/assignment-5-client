import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState, FormEvent } from "react";
import Swal from "sweetalert2";
import { useUpdateFacilityMutation } from "@/redux/features/facility/facility.api";
import { TFacility } from "@/types/facility.type";

const UpdateFacilityModal = ({
  facility,
  refetch,
}: {
  facility: TFacility;
  refetch: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(facility?.name || "");
  const [image, setImage] = useState(facility?.image || "");
  const [description, setDescription] = useState(facility?.description || "");
  const [pricePerHour, setPricePerHour] = useState(facility?.pricePerHour || 0);
  const [location, setLocation] = useState(facility?.location || "");

  const [updateFacility, { isLoading }] = useUpdateFacilityMutation();

  if (isLoading) {
    <p className="text-3xl text-center text-black-500 my-2 font-bold">
      Loading....
    </p>;
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !image || !description || pricePerHour <= 0 || !location) {
      Swal.fire("Error", "All fields are required and must be valid", "error");
      return;
    }

    const updatedFacility = {
      _id: facility._id,
      name,
      image,
      description,
      pricePerHour,
      location,
    };

    try {
      const result = await updateFacility({
        id: facility._id,
        ...updatedFacility,
      });
      console.log("Update result:", result);

      refetch();
      setIsModalOpen(false);
      // navigate("/allFacilities");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Facility Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error updating facility:", error.message);
        Swal.fire("Error", "Failed to update facility", "error");
      }
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#F95924] text-white hover:bg-red-700 border-2 border-transparent hover:border-black transition-colors m-4">
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent
        aria-describedby=""
        className="sm:max-w-[425px] bg-black border-[#F95924]"
      >
        <DialogHeader>
          <DialogTitle className="text-center text-white">
            Update <span className="text-[#F95924]">Facility</span>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-white">
                Facility
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3 border-[#F95924]"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right text-white">
                Image
              </Label>
              <Input
                id="image"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="col-span-3 border-[#F95924]"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right text-white">
                Description
              </Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3 border-[#F95924]"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="pricePerHour" className="text-right text-white">
                Price per Hour
              </Label>
              <Input
                id="pricePerHour"
                type="number"
                value={pricePerHour}
                onChange={(e) => setPricePerHour(parseFloat(e.target.value))}
                className="col-span-3 border-[#F95924]"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right text-white">
                Location
              </Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="col-span-3 border-[#F95924]"
              />
            </div>
          </div>

          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ml-36 rounded-lg bg-white text-[#F95924] hover:bg-[rgb(9,20,35)] border-2 border-transparent hover:border-[#F95924] transition-colors"
            type="submit"
          >
            Update Facility
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateFacilityModal;
