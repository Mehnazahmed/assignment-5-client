import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";

import { Outlet } from "react-router-dom";
import { logOut } from "../../redux/features/auth/authSlice";
import "../../pages/Home/common.css";

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
        <Header
          style={{
            fontSize: "1rem",
            backgroundColor: "rgb(9,20,35)",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <li
            className="text-white list-item "
            onClick={handleLogout}
            style={{
              listStyleType: "none",
              cursor: "pointer",
              padding: "0.5rem 1rem",
            }}
          >
            Logout
          </li>{" "}
        </Header>
        <Content
          style={{
            border: "1px solid #F95924",
            borderColor: "fff",
            backgroundColor: "rgb(9,20,35)",
          }}
        >
          <div
            style={{
              padding: 24,
              height: "100%",

              backgroundColor: "rgb(9,20,35)",
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
