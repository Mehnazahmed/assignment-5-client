import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { useLoginMutation } from "@/redux/features/auth/auth.Api";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Row, Typography } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "./common.css";
import { Button } from "@/components/ui/button";

const { Title } = Typography;

const Login = () => {
  const defaultUser = {
    email: "mehnaz@gmail.com",
    password: "Super123",
    // email: "oreo@example.com",
    // password: "oreo123",
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      console.log(userInfo);
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.token) as TUser;
      dispatch(setUser({ user: user, token: res.token }));
      if (res?.success) {
        navigate("/");
      }
      toast.success("Logged in", { id: toastId, duration: 2000 });
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
      console.log(err);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "100vh", backgroundColor: "rgb(9, 20, 35)" }}
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
          Log <span style={{ color: "#F95924" }}>In</span>
        </Title>

        <CustomForm onSubmit={onSubmit} defaultValues={defaultUser}>
          <CustomInput type="text" name="email" label="Email:" />
          <CustomInput type="password" name="password" label="Password:" />

          <Button
            type="submit"
            className="bg-white w-full text-[#F95924] hover:bg-[rgb(9,20,35)] border-2 border-transparent hover:border-[#F95924] transition-colors"
          >
            Log In
          </Button>
        </CustomForm>

        <h1
          style={{
            color: "#fff",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Not Registered Yet?{" "}
          <Link to="/register" style={{ color: "#F95924", marginLeft: "4px" }}>
            Sign Up
          </Link>
        </h1>
      </div>
    </Row>
  );
};

export default Login;
