import { Button } from "@/components/ui/button";
// import { useNavigate, useRouteError } from "react-router-dom";

const DisplayError = () => {
  //   const navigate = useNavigate();

  //   const handleLogOut = () => {
  // navigate('/login')
  //     toast.success("successfully signed out");
  //   };
  return (
    <div>
      <p className="text-red-500">Something went wrong!!!</p>

      <h4>
        Please <Button>Sign out</Button> & Sign back in!!
      </h4>
    </div>
  );
};

export default DisplayError;
