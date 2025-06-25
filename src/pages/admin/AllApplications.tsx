
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AllApplications = () => {
  const [applications] = useState([
    {
      id: 1,
      projectTitle: "E-commerce Website Development",
      freelancer: "John Doe",
      proposedBudget: "$4,800",
      timeline: "6 weeks",
      status: "Pending",
      appliedDate: "2024-01-15"
    },
    {
      id: 2,
      projectTitle: "Logo Design for Startup",
      freelancer: "Jane Smith",
      proposedBudget: "$450",
      timeline: "1 week",
      status: "Approved",
      appliedDate: "2024-01-12"
    },
    {
      id: 3,
      projectTitle: "Mobile App UI/UX Design",
      freelancer: "Mike Johnson",
      proposedBudget: "$2,800",
      timeline: "4 weeks",
      status: "Rejected",
      appliedDate: "2024-01-18"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Applications</h1>
        <Button>Filter Applications</Button>
      </div>

      <div className="grid gap-6">
        {applications.map((application) => (
          <Card key={application.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{application.projectTitle}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    Applied by: {application.freelancer}
                  </p>
                </div>
                <Badge className={getStatusColor(application.status)}>
                  {application.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Proposed Budget</p>
                  <p className="font-semibold">{application.proposedBudget}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Timeline</p>
                  <p className="font-semibold">{application.timeline}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Applied Date</p>
                  <p className="font-semibold">{application.appliedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="font-semibold">{application.status}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <Button variant="outline" size="sm">View Proposal</Button>
                <Button size="sm">Review</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllApplications;
