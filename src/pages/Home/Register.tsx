import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { useAddUserMutation } from "@/redux/features/user/user.api";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Form, Input, Row, Typography } from "antd";
import { Button } from "@/components/ui/button";
import "./common.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const { Title } = Typography;
const userDefaultValues = {
  name: "oreo",
  email: "oreo@example.com",
  password: "oreo123",
  phone: "555-123-4567",
  //   profileImg: "/images/default-profile.png",
  role: "user", // Default role
  address: "123 Default St, Default City",
};

const Register = () => {
  const navigate = useNavigate();
  const { reset } = useForm();
  const [addUser] = useAddUserMutation();

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

    addUser(formData)
      .unwrap()
      .then((response) => {
        toast("User created successfully");
        reset();
        navigate("/");
        console.log("User created successfully:", response);
      })
      .catch((error) => {
        toast("Failed to create user");
        console.error("Failed to create user:", error);
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
          Sign <span style={{ color: "#F95924" }}>Up</span>
        </Title>

        <CustomForm onSubmit={onSubmit} defaultValues={userDefaultValues}>
          <CustomInput type="text" name="name" label="Name" />
          <CustomInput type="text" name="email" label="Email:" />

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

          <CustomInput type="text" name="phone" label="Contact No." />

          <CustomInput type="text" name="address" label="Address" />

          <CustomInput
            label="Role:"
            type="text"
            name="role"
            defaultValue="user"
          />

          <CustomInput type="password" name="password" label="Password:" />

          <Button
            type="submit"
            className="bg-white w-full text-[#F95924] hover:bg-[rgb(9,20,35)] border-2 border-transparent hover:border-[#F95924] transition-colors"
          >
            Sign Up
          </Button>
        </CustomForm>
        <h1
          style={{
            color: "#fff",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Already Registered ?{" "}
          <Link to="/login" style={{ color: "#F95924", marginLeft: "4px" }}>
            Log In
          </Link>
        </h1>
      </div>
    </Row>
  );
};

export default Register;
