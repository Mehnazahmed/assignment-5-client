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
import { useCreateAdminMutation } from "@/redux/features/user/user.api";

const { Title } = Typography;

const CreateAdmin = () => {
  const { reset } = useForm();
  const [createAdmin] = useCreateAdminMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("role", data.role || "user");
    formData.append("password", data.password);

    // Append image file if present
    if (data.image) {
      formData.append("file", data.image);
    }

    createAdmin(formData)
      .unwrap()
      .then((response) => {
        toast("Admin created successfully");
        reset();

        console.log("Admin created successfully:", response);
      })
      .catch((error) => {
        toast("Failed to create admin");
        console.error("Failed to create admin:", error);
      });

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
          Create <span style={{ color: "#F95924" }}>Admin</span>
        </Title>

        <CustomForm onSubmit={onSubmit}>
          <CustomInput
            type="text"
            name="name"
            label="Name"
            rules={{ required: "Name is required" }}
          />
          <CustomInput
            type="text"
            name="email"
            label="Email:"
            rules={{ required: "Email is required" }}
          />

          <Controller
            name="image"
            rules={{ required: "Picture is required" }}
            render={({
              field: { onChange, value, ...field },
              fieldState: { error },
            }) => (
              <Form.Item
                label={<span style={{ color: "#fff" }}>Picture</span>}
                help={error ? error.message : null}
                validateStatus={error ? "error" : ""}
              >
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

          <CustomInput
            type="text"
            name="phone"
            label="Contact No."
            rules={{ required: "Contact No is required" }}
          />

          <CustomInput
            type="text"
            name="address"
            label="Address"
            rules={{ required: "Address is required" }}
          />

          <CustomInput
            label="Role:"
            type="text"
            name="role"
            defaultValue="admin"
          />

          <CustomInput
            type="password"
            name="password"
            label="Password:"
            rules={{ required: "Password is required" }}
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

export default CreateAdmin;
