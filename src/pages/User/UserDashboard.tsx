import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <h1>This is User Dashboard</h1>
      <Outlet />
    </div>
  );
};

export default UserDashboard;
