import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useGetAllUsersQuery } from "@/redux/features/user/user.api";
import { TUser } from "@/types/user.type";
import { useEffect } from "react";
import { Spin } from "antd";

const AllUsers = () => {
  const { data: users, refetch, isLoading } = useGetAllUsersQuery({});

  console.log(users);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const tableRows = users?.data?.map((user: TUser) => (
    <TableRow key={user._id} className="hover:bg-slate-800 ">
      <TableCell>
        <Avatar>
          <AvatarImage src={user.profileImg} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell className="text-white">{user.name}</TableCell>
      <TableCell className="text-white">{user.email}</TableCell>
      <TableCell className="text-white">{user.phone}</TableCell>
      <TableCell className="text-white">{user.role}</TableCell>
      <TableCell className="text-white">{user.address}</TableCell>
    </TableRow>
  ));

  if (isLoading) return <Spin size="large" />;

  return (
    <div className="overflow-x-auto">
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          color: "#fff",
          marginBottom: "24px",
        }}
      >
        All <span style={{ color: "#F95924" }}>Users</span>
      </h1>

      <div className="mx-auto py-2 sm:px-10">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="hover:bg-slate-800 ">
              <TableHead className="text-white">Profile Image</TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Email</TableHead>
              <TableHead className="text-white">Phone</TableHead>
              <TableHead className="text-white">Role</TableHead>
              <TableHead className="text-white">Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllUsers;
