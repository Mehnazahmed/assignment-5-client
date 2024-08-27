import { Button, Layout } from "antd";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";

import { Outlet } from "react-router-dom";
import { logOut } from "../../redux/features/auth/authSlice";
const { Header, Content } = Layout;

const DashBoardLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header>
          <Button onClick={handleLogout}>Logout</Button>{" "}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoardLayout;
