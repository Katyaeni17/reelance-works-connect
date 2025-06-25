
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AdminProjects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "E-commerce Website Development",
      client: "TechCorp Inc.",
      freelancer: "John Doe",
      status: "In Progress",
      budget: "$5,000",
      deadline: "2024-02-15"
    },
    {
      id: 2,
      title: "Logo Design for Startup",
      client: "StartupXYZ",
      freelancer: "Jane Smith",
      status: "Completed",
      budget: "$500",
      deadline: "2024-01-20"
    },
    {
      id: 3,
      title: "Mobile App UI/UX Design",
      client: "AppVenture",
      freelancer: "Mike Johnson",
      status: "Under Review",
      budget: "$3,000",
      deadline: "2024-02-28"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Under Review": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Project Management</h1>
        <Button>Export Report</Button>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    Client: {project.client} | Freelancer: {project.freelancer}
                  </p>
                </div>
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex space-x-6">
                  <div>
                    <p className="text-sm text-gray-600">Budget</p>
                    <p className="font-semibold">{project.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Deadline</p>
                    <p className="font-semibold">{project.deadline}</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button size="sm">Manage</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminProjects;
