import { Layout, Menu } from "antd";

import { useAppSelector } from "../../redux/hooks";
import { sidebarItemsGenerator } from "@/utils/sidebaritemsGenerator";
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { adminPaths } from "@/routes/admin.routes";
import { userPaths } from "@/routes/user.routes";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  SUPERADMIN: "superAdmin",
  USER: "user",
};

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;

  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.SUPERADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.SUPERADMIN);
      break;
    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
      break;

    default:
      break;
  }

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
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
