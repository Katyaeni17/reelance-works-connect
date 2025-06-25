
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

const AllUsers = () => {
  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      userType: "Freelancer",
      joinDate: "2023-12-01",
      status: "Active",
      completedProjects: 15
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      userType: "Client",
      joinDate: "2023-11-15",
      status: "Active",
      completedProjects: 8
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      userType: "Freelancer",
      joinDate: "2024-01-10",
      status: "Pending",
      completedProjects: 2
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Suspended": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getUserTypeColor = (userType: string) => {
    switch (userType) {
      case "Freelancer": return "bg-blue-100 text-blue-800";
      case "Client": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button>Add New User</Button>
      </div>

      <div className="grid gap-6">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{user.name}</CardTitle>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Badge className={getUserTypeColor(user.userType)}>
                    {user.userType}
                  </Badge>
                  <Badge className={getStatusColor(user.status)}>
                    {user.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Join Date</p>
                  <p className="font-semibold">{user.joinDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Completed Projects</p>
                  <p className="font-semibold">{user.completedProjects}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="font-semibold">{user.status}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <Button variant="outline" size="sm">View Profile</Button>
                <Button variant="outline" size="sm">Send Message</Button>
                <Button size="sm">Manage</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
