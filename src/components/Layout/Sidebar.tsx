import { Layout, Menu } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";
import { CustomJwtPayload } from "@/types/global";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",

  USER: "user",
};

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);
  const location = useLocation(); // Get current location for active link

  let user;

  if (token) {
    user = verifyToken(token);
  }

  // Define sidebar items based on user role
  const sidebarItems = (() => {
    switch ((user as CustomJwtPayload).role) {
      case userRole.ADMIN:
        return [
          {
            key: "1",
            label: (
              <Link to="/adminDashboard" className="sidebar-link">
                Admin Dashboard
              </Link>
            ),
          },
          {
            key: "2",
            label: "User Management",
            children: [
              {
                key: "2-1",
                label: (
                  <Link to="/adminDashboard/allusers" className="sidebar-link">
                    Users
                  </Link>
                ),
              },
              {
                key: "2-2",
                label: (
                  <Link
                    to="/adminDashboard/create-admin"
                    className="sidebar-link"
                  >
                    Create Admin
                  </Link>
                ),
              },
            ],
          },
          {
            key: "3",
            label: "Facility Management",
            children: [
              {
                key: "3-1",
                label: (
                  <Link
                    to="/adminDashboard/allFacilities"
                    className="sidebar-link"
                  >
                    Facilities
                  </Link>
                ),
              },
              {
                key: "3-2",
                label: (
                  <Link
                    to="/adminDashboard/create-facility"
                    className="sidebar-link"
                  >
                    Create Facility
                  </Link>
                ),
              },
            ],
          },
          {
            key: "4",
            label: "Booking Management",
            children: [
              {
                key: "4-1",
                label: (
                  <Link
                    to="/adminDashboard/allbookings"
                    className="sidebar-link"
                  >
                    Bookings
                  </Link>
                ),
              },
            ],
          },
        ];
      case userRole.USER:
        return [
          {
            key: "1",
            label: (
              <Link to="/userDashboard" className="sidebar-link">
                User Dashboard
              </Link>
            ),
          },
          {
            key: "2",
            label: (
              <Link to="bookings/:userEmail" className="sidebar-link">
                My Bookings
              </Link>
            ),
          },
        ];
      default:
        return [];
    }
  })();

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(9,20,35)",
        }}
      >
        <Link to="/" className="flex items-center ">
          <h3 className="font-extrabold text-white text-xl ml-6">
            Sports <span style={{ color: "#F95924" }}>Gen</span>
          </h3>
        </Link>
      </div>
      <Menu
        theme="dark"
        className="sidebar-menu"
        style={{ backgroundColor: "rgb(9,20,35)", height: "100vh" }}
        mode="inline"
        defaultSelectedKeys={[location.pathname]} // Set default selected key based on current path
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
