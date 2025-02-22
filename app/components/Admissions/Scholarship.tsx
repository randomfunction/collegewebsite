import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { FileText } from "lucide-react";

const ScholarshipsPage = () => {
  const documentLinks = [
    {
      title: "NOS Advertisement (Hindi)",
      url: "/images/schol/NOS-advertisement%20Hindi%20version.pdf",
    },
    {
      title: "NOS Advertisement (English)",
      url: "/images/schol/NOS-advertisment%20english%20version.pdf",
    },
    {
      title: "Instruction Manual for NOS Schemes",
      url: "/images/schol/instruction%20manual-NOS-2022-23.pdf",
    },
  ];

  const scholarshipData = {
    Maharashtra: [
      {
        name: "Government of India Post-Matric Scholarship",
        department: "Social Justice and Special Assistance",
        link: "https://mahadbtmahait.gov.in/",
      },
      {
        name: "Post-Matric Tuition Fee and Examination Fee (Freeship)",
        department: "Social Justice and Special Assistance",
        link: "https://mahadbtmahait.gov.in/",
      },
      {
        name: "Post Matric Scholarship Scheme (Government Of India ).",
        department: "Tribal Development Department",
        link: "https://mahadbtmahait.gov.in/",
      },
      {
        name: "Tuition Fee &  Exam Fee for Tribal Students ( Freeship).",
        department: "Tribal Development Department",
        link: "https://mahadbtmahait.gov.in/",
      },
      {
        name: "Post Matric Scholarship to VJNT Students.",
        department: "VJNT, OBC and SBC Welfare Department",
        link: "https://mahadbtmahait.gov.in/",
      },
      {
        name: "Tuition Fees and Examination Fees to VJNT Students",
        department: "VJNT, OBC and SBC Welfare Department",
        link: "https://mahadbtmahait.gov.in/",
      },
      {
        name: "Post Matric Scholarship to OBC Students",
        department: "VJNT, OBC and SBC Welfare Department",
        link: "https://mahadbtmahait.gov.in/",
      },
      {
        name: "Tuition Fees and Examination Fees to OBC Students",
        department: "VJNT, OBC and SBC Welfare Department",
        link: "https://mahadbtmahait.gov.in/",
      },
    ],

    MadhyaPradesh: [
      {
        name: "Mukhya Mantri Medhavi Vidyarthi Yojana - MMVY",
        department:
          "Department of Technical Education & Skill Development, Government of Madhya Pradesh",
        link: "https://scholarshipportal.mp.nic.in/Index.aspx",
      },
    ],
    UttarPradesh: [
      {
        name: "Post matric Other State Scholarship for  General Category ",
        department: "Social Welfare Department, Government of Uttar Pradesh.",
        link: "https://scholarship.up.nic.in/index.aspx",
      },
    ],
    Rajasthan: [
      {
        name: "Dr. Ambedkar Post Matric Scholarship for EBC Students, Rajasthan ",
        department:
          "Social Justice and Empowerment Department Government of Rajasthan",
        link: "https://www.sje.rajasthan.gov.in/Default.aspx?PageID=346",
      },
    ],
    Telangana: [
      {
        name: "Post-Matric (Outside State) Scholarship for ST/ SC/ BC/EBC/Disabled Welfare Category students",
        department: "Government of Telangana",
        link: "https://telanganaepass.cgg.gov.in/",
      },
    ],
    AndhraPradesh: [
      {
        name: "Post-Matric (Outside State) Scholarship for ST/ SC",
        department: "Government of Andhra Pradesh",
        link: "https://jnanabhumi.ap.gov.in/",
      },
    ],
    NationalPortal: [
      {
        name: "Post Matric Scholarships Scheme for Minorities",
        department: "Ministry of Minority Affairs",
        link: "https://scholarships.gov.in/",
      },
      {
        name: "Merit Cum Means Scholarship For Professional and Technical Courses CS",
        department: "Ministry of Minority Affairs",
        link: "https://scholarships.gov.in/",
      },
      {
        name: "Post-matric Scholarship for Students with Disabilities",
        department: "Department of Empowerment of Person with Disabilities",
        link: "https://scholarships.gov.in/",
      },
      {
        name: "Top Class Education Scheme for SC Students",
        department: "Ministry of Social justice and empowerment",
        link: "https://scholarships.gov.in/",
      },
      {
        name: "Central Sector Scheme Of Scholarships for Colleges and  University Students",
        department: "Department of Higher Education",
        link: "https://scholarships.gov.in/",
      },
      {
        name: "Prime Minister's Scholarship Scheme For Central Armed Police Forces And Assam Rifles",
        department: "Ministry of Tribal Affairs",
        link: "https://scholarships.gov.in/",
      },
      {
        name: "National Fellowship and Scholarship for Higher Education of ST Students - Scholarship (Formally Top Class Education for Schedule Tribe Students) - only for scholarships",
        department: "Ministry of Minority Affairs",
        link: "https://scholarships.gov.in/",
      },
      {
        name: "PM Scholarship Scheme For Wards of  States/UTs Police personnel Martyrad during Terror/NAXAL Attacks.",
        department: "WARB Ministry of Home Affairs",
        link: "https://scholarships.gov.in/",
      },
      {
        name: "Prime Minister's Scholarship Scheme For RPF/RPSF",
        department: "RPF/RPSF, Ministry of Railway",
        link: "https://scholarships.gov.in/",
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Scholarships</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Alert>
              <AlertTitle>
                Notice: National Overseas Scholarship Scheme (NOS)
              </AlertTitle>
              <AlertDescription className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {documentLinks.map((doc, index) => (
                    <Link
                      key={index}
                      href={doc.url}
                      className="flex items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      <span>{doc.title}</span>
                    </Link>
                  ))}
                </div>
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>State-wise Scholarship List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">Sr.No.</TableHead>
                      <TableHead>Student Domicile State</TableHead>
                      <TableHead>Name of the Scheme</TableHead>
                      <TableHead>Scheme Governed by</TableHead>
                      <TableHead>Website Link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(scholarshipData).map(
                      ([state, scholarships], stateIndex) =>
                        scholarships.map((scholarship, index) => (
                          <TableRow key={`${stateIndex}-${index}`}>
                            <TableCell>{stateIndex + index + 1}</TableCell>
                            {index === 0 && (
                              <TableCell rowSpan={scholarships.length}>
                                {state}
                              </TableCell>
                            )}
                            <TableCell>{scholarship.name}</TableCell>
                            <TableCell>{scholarship.department}</TableCell>
                            <TableCell>
                              <Link
                                href={scholarship.link}
                                target="_blank"
                                className="text-primary hover:underline"
                              >
                                LINK
                              </Link>
                            </TableCell>
                          </TableRow>
                        ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScholarshipsPage;
