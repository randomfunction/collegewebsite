import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PhDProgramOverview = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-6">
      <Card className="w-full max-w-7xl mx-auto bg-gray-800 shadow-xl border border-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-white">PhD Program Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="categories">
              <AccordionTrigger className="text-lg text-white">PhD Program Categories</AccordionTrigger>
              <AccordionContent className="bg-gray-700 p-4 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Industry Candidates:</h3>
                    <ul className="list-disc ml-6 text-gray-300">
                      <li>Extern Candidate from Industry (EX-I)</li>
                      <li>Intern Sponsored Candidate from Industry (IN-IS)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Academic Institution(s) Candidates:</h3>
                    <ul className="list-disc ml-6 text-gray-300">
                      <li>Extern Self-financed candidates from Academic Institutions (Ex-A)</li>
                      <li>Intern Sponsored Candidate from Academic Institutions (IN-AS)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Other Candidates:</h3>
                    <ul className="list-disc ml-6 text-gray-300">
                      <li>Intern Self Sponsored Candidates (IN-U)</li>
                      <li>Intern externally funded or sponsored or Project Staff Candidates (IN-ES)</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="examination">
              <AccordionTrigger className="text-lg text-white">Examination Pattern</AccordionTrigger>
              <AccordionContent className="bg-gray-700 p-4 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Entrance Test Sections:</h3>
                    <p className="text-gray-300">Section-1: General Ability and Communication Skills</p>
                    <p className="text-gray-300">Section-2: Category-specific syllabus</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Stream-wise Syllabus:</h3>
                    <Table className="bg-gray-800 border border-gray-600">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-white">Stream</TableHead>
                          <TableHead className="text-white">Syllabus</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-gray-300">Electronics and Communication Engineering</TableCell>
                          <TableCell className="text-gray-300">Engineering Mathematics, Networks, Signals and Systems...</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-gray-300">Computer Science and Engineering</TableCell>
                          <TableCell className="text-gray-300">Engineering Mathematics, Digital Logic, Computer Organization...</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="selection">
              <AccordionTrigger className="text-lg text-white">Selection Process</AccordionTrigger>
              <AccordionContent className="bg-gray-700 p-4 rounded-lg">
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl mb-2">Stages:</h3>
                  <ol className="list-decimal ml-6 space-y-2 text-gray-300">
                    <li>Stage 1: Entrance Test - Physical presence required</li>
                    <li>Stage 2: Interview - Offline Mode</li>
                    <li>Stage 3: Combined Score Calculation</li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="duration">
              <AccordionTrigger className="text-lg text-white">Program Duration</AccordionTrigger>
              <AccordionContent className="bg-gray-700 p-4 rounded-lg">
                <ul className="list-disc ml-6 space-y-2 text-gray-300">
                  <li>Regular Candidates: Three years from date of joining</li>
                  <li>Industry Candidates:
                    <ul className="list-disc ml-6 mt-2">
                      <li>Three years with Master's Degree</li>
                      <li>Four years with Bachelor's Degree</li>
                    </ul>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhDProgramOverview;
