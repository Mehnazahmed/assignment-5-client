import { useEffect, useState } from "react";
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useGetUserByEmailQuery } from "@/redux/features/user/user.api";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Layout, Avatar, Card, Typography, Spin } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

const AdminInfo = () => {
  const token = useAppSelector(useCurrentToken);
  const [user, setUser] = useState<TUser | null>(null);

  useEffect(() => {
    if (token) {
      const decodedUser = verifyToken(token);
      setUser(decodedUser as TUser);
    }
  }, [token]);

  const {
    data: userData,
    isLoading,
    error,
  } = useGetUserByEmailQuery(user?.userEmail);

  console.log(userData);

  if (isLoading) return <Spin size="large" />;
  if (error) return <div>Error fetching user data</div>;

  const userName = userData?.data?.name || "User";
  const role = userData?.data?.role || "role";
  const email = userData?.data?.email;
  const profileImg =
    userData?.data?.profileImg || "https://example.com/default-profile.jpg";
  const address = userData?.data?.address || "No address available";

  return (
    <Layout style={{ padding: "24px", backgroundColor: "rgb(9,20,35)" }}>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgb(9,20,35)",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: "12px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            display: "flex",
            padding: "24px",
            backgroundColor: "#ffffff",
            border: "1px solid #F95924",
            alignItems: "center", //
          }}
        >
          <div className="flex justify-end m-8">
            <div>
              <Avatar
                size={200}
                src={profileImg}
                style={{ marginRight: "20px", border: "2px solid #F95924" }}
              />
            </div>
            <div className="m-8">
              <Title
                level={2}
                style={{ marginBottom: "16px", fontSize: "24px" }}
              >
                Welcome back,{" "}
                <span className="text-[#F95924]">{userName}!</span>
              </Title>
              <Text
                style={{
                  fontSize: "18px",
                  color: "#555",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Role: <strong>{role}</strong>
              </Text>
              <Text
                style={{
                  fontSize: "18px",
                  color: "#555",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Email: <strong>{email}</strong>
              </Text>
              <Text
                style={{
                  fontSize: "16px",
                  color: "#555",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                Address: <strong>{address}</strong>
              </Text>
            </div>
          </div>
        </Card>
      </Content>
    </Layout>
  );
};

export default AdminInfo;
