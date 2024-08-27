import { Button } from "@/components/ui/button";
import { Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Register = () => {
  // const handleSignUp = () => {
  //   console.log();
  // };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(9, 20, 35)",
      }}
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
          Sign Up
        </Title>

        <Form layout="vertical">
          <Form.Item label={<Text style={{ color: "#ccc" }}>Name</Text>}>
            <Input
              placeholder="Enter your name"
              style={{
                borderColor: "#F95924",
              }}
            />
          </Form.Item>

          <Form.Item label={<Text style={{ color: "#ccc" }}>Email</Text>}>
            <Input
              type="email"
              placeholder="Enter your email"
              style={{
                borderColor: "#F95924",
              }}
            />
          </Form.Item>

          <Form.Item label={<Text style={{ color: "#ccc" }}>Password</Text>}>
            <Input.Password
              style={{
                borderColor: "#F95924",
              }}
            />
          </Form.Item>

          <Form.Item>
            <Text type="secondary">
              <Link to="/forgot-password" style={{ color: "#a0aec0" }}>
                Forget Password?
              </Link>
            </Text>
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              block
              className="bg-white w-full text-[#F95924] hover:bg-[rgb(9,20,35)] border-2 border-transparent hover:border-[#F95924] transition-colors"
            >
              Sign Up
            </Button>
          </Form.Item>

          <Form.Item>
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Already Registered?{" "}
              <Link to="/login" style={{ color: "#F95924" }}>
                Log In
              </Link>
            </Text>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
