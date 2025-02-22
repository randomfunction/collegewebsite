import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone } from 'lucide-react';

const ContactAdmission = () => {
  const committeeMembers = [
    {
      role: "Admission In-Charge",
      name: "Dr. Paritosh Peshwe",
      contact: "9975104323"
    },
    {
      role: "Admission Co-In-Charge",
      name: "Dr. Nikhil Agrawal",
      contact: "9406769734"
    },
    {
      role: "Hostel Warden (Boys)",
      name: "Dr. Harsh Goud",
      contact: "9827554326"
    },
    {
      role: "Hostel Warden (Girls)",
      name: "Dr. Sushmita Dandeliya",
      contact: "9082333050"
    },
    {
      role: "Administrative related enquiry",
      name: ["Mr. Rajan Parulkar", "Mr. Harshad Pophali"],
      contact: ["8554993496", "9373288110"]
    },
    {
      role: "Scholarship related enquiry",
      name: "Ms. Harsha Nagpure",
      contact: "9096927754"
    },
    {
      role: "Account related enquiry",
      name: "Ms. Shilpa Pawankar",
      contact: "8080339345"
    },
    {
      role: "Placement related enquiry",
      name: "Ms. Meera Jagdale",
      contact: "9764490050"
    }
  ];

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Admission Committee Members Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Role</TableHead>
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead>Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {committeeMembers.map((member, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {member.role}
                </TableCell>
                <TableCell>
                  {Array.isArray(member.name) ? (
                    member.name.map((name, idx) => (
                      <div key={idx} className="py-1">{name}</div>
                    ))
                  ) : (
                    member.name
                  )}
                </TableCell>
                <TableCell>
                  {Array.isArray(member.contact) ? (
                    member.contact.map((contact, idx) => (
                      <div key={idx} className="flex items-center gap-2 py-1">
                        <Phone className="h-4 w-4" />
                        <a href={`tel:${contact}`} className="hover:text-blue-600">
                          {contact}
                        </a>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <a href={`tel:${member.contact}`} className="hover:text-blue-600">
                        {member.contact}
                      </a>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ContactAdmission;