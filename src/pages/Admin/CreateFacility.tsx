import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";

import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Form, Input, Row, Typography } from "antd";
import { Button } from "@/components/ui/button";
import "../Home/common.css";

import { toast } from "sonner";
import { useAddFacilityMutation } from "@/redux/features/facility/facility.api";

const { Title } = Typography;

const facilityDefaultValues = {
  name: "Default Facility",
  description: "Default description",
  pricePerHour: 50,
  location: "Default Location",
};

const CreateFacility = () => {
  const { reset } = useForm({
    defaultValues: facilityDefaultValues,
  });
  const [createFacility] = useAddFacilityMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("location", data.location);

    const pricePerHour = Number(data.pricePerHour);

    if (isNaN(pricePerHour)) {
      toast("Price Per Hour must be a valid number");
      return;
    }

    formData.append("pricePerHour", pricePerHour.toString());

    if (data.file?.length) {
      formData.append("file", data.file[0]);
    }

    try {
      const response = await createFacility(formData).unwrap();
      if (response.success) {
        toast("Facility created successfully");
        reset();

        console.log("Facility created successfully:", response);
      }
    } catch (error) {
      toast("Failed to create facility");
      console.error("Failed to create facility:", error);
    }

    console.log(Object.fromEntries(formData));
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ backgroundColor: "rgb(9, 20, 35)" }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          background: "#1e293b",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <Title
          level={3}
          style={{ textAlign: "center", color: "#fff", marginBottom: "24px" }}
        >
          Create <span style={{ color: "#F95924" }}>Facility</span>
        </Title>

        <CustomForm onSubmit={onSubmit}>
          <CustomInput
            type="text"
            name="name"
            label="Name"
            defaultValue={facilityDefaultValues.name}
          />
          <CustomInput
            type="text"
            name="description"
            label="Description"
            defaultValue={facilityDefaultValues.description}
          />
          <CustomInput
            type="number"
            name="pricePerHour"
            label="Price Per Hour"
          />
          <CustomInput
            type="text"
            name="location"
            label="Location"
            defaultValue={facilityDefaultValues.location}
          />

          <Controller
            name="image"
            render={({ field: { onChange, value, ...field } }) => (
              <Form.Item label={<span style={{ color: "#fff" }}>Picture</span>}>
                <Input
                  style={{
                    borderColor: "#F95924",
                  }}
                  value={value?.fileName}
                  type="file"
                  {...field}
                  onChange={(e) => onChange(e.target.files?.[0])}
                />
              </Form.Item>
            )}
          />
          <Button
            type="submit"
            className="bg-white w-full text-[#F95924] hover:bg-[rgb(9,20,35)] border-2 border-transparent hover:border-[#F95924] transition-colors"
          >
            Create
          </Button>
        </CustomForm>
      </div>
    </Row>
  );
};

export default CreateFacility;
